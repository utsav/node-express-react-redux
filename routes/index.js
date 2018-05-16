var express = require('express');
var router = express.Router();
var authCtrl = require('./../controllers/auth');
var checkToken = require('./../services/checkToken');
var fileUpload = require('./../services/fileUpload');
var userCtrl = require('./../controllers/user');

/* All API routes */

// Users route
router.post('/signup', authCtrl.userRegister);

router.post('/login', authCtrl.userLogin);

// get user List
router.get('/user', checkToken.validateToken, userCtrl.getUserDetails);
router.put('/user', checkToken.validateToken, userCtrl.updateUserDetails);
router.delete('/user', checkToken.validateToken, userCtrl.deleteUser);

//upload image
router.post('/uploadImage', checkToken.validateToken, fileUpload.uploadObj, fileUpload.uploadImage);
//upload icon
router.post('/uploadIconImage', checkToken.validateToken, fileUpload.uploadIconObj, fileUpload.uploadIconImage);

module.exports = router;
