const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const moment = require("moment");

const bloodRequestSchema = mongoose.Schema(
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
    ReasonForBloodRequirement: {
      type: String,
    },
    Address: {
      type: String,
    },
    Hospital: {
      type: String,
    },
    Recommendation: {
      type: String,
    },
  },
  { timestamps: true }
);

const BloodRequest = mongoose.model("BloodRequest", bloodRequestSchema);

module.exports = { BloodRequest };
