var User = require('./../models/users');

exports.getUserList = function (req, res) {
	User.find().exec(function (err, resultUserList) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).json(resultUserList);
		}
	});
};

exports.getUserDetails = function (req, res) {
	User.findOne({_id : req.user._id}).lean().exec(function(err, getUserResult) {
		if (err) {
			return res.status(400).json(err);
		} else {
			return res.status(200).json(getUserResult);
		}
	});
};

exports.updateUserDetails = function (req, res) {

	var userObj = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		mobile: req.body.mobile,
	};

	User.update({_id:req.user._id}, userObj, function (err, updateUser) {
		if (err) {
			return res.status(400).json(err);
		} else {
			return res.status(200).json(userObj);
		}
	});
};

exports.deleteUser = function (req, res) {
	User.deleteOne({_id: req.user._id}, function(err, deleteResult) {
		if (err) {
			return res.status(400).json(err);
		} else {
			return res.status(200).json({message : 'User successfully deleted'});
		}
	});
};
