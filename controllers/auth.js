var User = require('./../models/users');
var jwt = require('jsonwebtoken');
var config = require('./../config/config');
var bcrypt = require('bcryptjs');

exports.userRegister = function (req, res){
    if(!req.body.email || !req.body.password || !req.body.firstName || !req.body.lastName || !req.body.mobile)
        return res.status(400).json({message : 'Invalid Parameters'});

    var userObj = {
        firstName : req.body.firstName, 
        lastName : req.body.lastName,
        email : req.body.email,
        password : req.body.password,
        mobile : req.body.mobile,
        created_on : new Date(),
        last_login : new Date()
    };

    var user = new User(userObj);
    user.save(function(err, resultUserRegister){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }else{
            var token = jwt.sign(resultUserRegister.toObject(), config.secret);
            res.status(200).json({...resultUserRegister.toObject(), ...{token}});
        }
    })
};

exports.userLogin = function (req, res) {
    if (!req.body.email || !req.body.password) {
        res.status(400).send({message: 'Invalid Parameters'});
    }

    User.findOne({email: req.body.email}, function(err, userResult) {
        if (err) {
            return res.status(400).send(err);
        } else {
            if(!userResult) {
                return res.status(400).json({message : 'Invalid credentials'});
            }

            userResult.comparePassword(req.body.password, function (err, isMatch){
                if(isMatch && !err) {
                    var token = jwt.sign(userResult.toObject(), config.secret);
                    return res.status(200).json({...userResult.toObject(), ...{token}});
                } else {
                    return res.status(400).json({message : 'Invalid credentials'});
                }
            })
        }
    });
}
