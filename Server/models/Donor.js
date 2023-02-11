const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const moment = require('moment');

const donarSchema = mongoose.Schema({

    Name: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        maxlength: 50,
    },
    State: {
        type: String,
        maxlength: 50,
    },
    District: {
        type: String,
        maxlength: 50,
    },
    Phone_number: {
        type: Number,
        length: 10,
    },
    PinCode: {
        type: Number,
        length: 6,
    },
    password: {
        type: String,
        minLength: 5,
    },
    Address: {
        type: String,
    },
    Age: {
        type: Number,
        default: 0,
    },
    Height_cms: {
        type: Number,
    },
    Weight_kgs: {
        type: Number,
    },
    MedicalExam: {
        type: String,
    },
    BloodGroup: {
        type: String,
    },
    RhFactor: {
        type: Boolean,
        default: false,
    },
    BloodPressure: {
        type: String,
    },
    BloodUnitNumber: {
        type: Number,
    },
    BagSegmentNumber: {
        type: Number,
    },
    AadhaarNumber: {
        type: Number,
        length: 12,
    },
    DonarCreditCardNumber: {
        type: Number,
    },
    DateOfDonation: {
        type: Date,
    },
}, { timestamps: true });

donarSchema.pre('save', function(next) {
    const donar = this;

    if (donar.isModified('password')) {
        console.log('password changed');
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err);

            bcrypt.hash(donar.password, salt, function(err, hash) {
                if (err) return next(err);
                donar.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

donarSchema.methods.comparePassword = function(plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

donarSchema.methods.generateToken = function(cb) {
    const donar = this;
    const token = jwt.sign(donar._id.toHexString(), 'secret');
    const oneHour = moment()
        .add(1, 'hour')
        .valueOf();

    donar.tokenExp = oneHour;
    donar.token = token;
    donar.save(function(err, donar) {
        if (err) return cb(err);
        cb(null, donar);
    });
};

donarSchema.statics.findByToken = function(token, cb) {
    const donar = this;

    jwt.verify(token, 'secret', function(err, decode) {
        donar.findOne({ _id: decode, token: token }, function(err, donar) {
            if (err) return cb(err);
            cb(null, donar);
        });
    });
};


const Donar = mongoose.model('Donar', donarSchema);

module.exports = { Donar };