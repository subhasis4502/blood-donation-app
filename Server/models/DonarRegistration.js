const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const moment = require("moment");

const donarregistrationSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      maxlength: 50,
    },
    email: {
      type: String,
      maxlength: 50,
    },
    Gender: {
      type: String,
    },
    Age: {
      type: Number,
    },
    State: {
      type: String,
      maxlength: 50,
    },
    District: {
      type: String,
      maxlength: 50,
    },
    PhoneNumber: {
      type: Number,
      length: 10,
    },

    BloodGroup: {
      type: String,
    },
    Address: {
      type: String,
    },

    AadhaarNumber: {
      type: Number,
      length: 12,
    },
    DateOfDonation: {
      type: Date,
    },
    BloodBank: {
      type: String,
    },
    BloodCamp: {
      type: String,
    },
  },
  { timestamps: true }
);

const DonarRegistration = mongoose.model(
  "DonarRegistration",
  donarregistrationSchema
);

module.exports = { DonarRegistration };
