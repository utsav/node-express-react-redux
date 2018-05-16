var jwt = require('jsonwebtoken');
var config = require('./../config/config');

exports.validateToken = function (req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    console.log("token", token);
    // decode token
    if (token) {

      // verifies secret
      jwt.verify(token, config.secret, function(err, decoded) {
        if (err) {
          return res.status(403).json({message: 'Invalid Token' });
        } else {
          // if everything is good, save to request for use in other routes
          req.user = decoded;
          next();
        }
      });
    } else {
      // if there is no token

      return res.status(403).json({
          message: 'Invalid Token'
      });
    }
};