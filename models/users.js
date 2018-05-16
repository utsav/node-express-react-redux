var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var ObjectId = Schema.ObjectId;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// set up a mongoose model
var UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        default: ""
    },
    lastName: {
        type: String,
        required: true,
        default: null
    },
    email: {
        type: String,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number
    },
    last_login: {
        type: Date
    },
    created_on: {
        type: Date
    },
});

UserSchema.index({ email: 1 }, { unique: true });

// this function causing issue when not provided password
UserSchema.pre('save', function (next) {
    var user = this;

    // if password is not provided then skip this section
    if (!user.password) {
        return next();
    }

    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    }
    else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

var user = mongoose.model('user', UserSchema);
module.exports = user;
