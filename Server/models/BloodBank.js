const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bloodBankSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      maxlength: 50,
    },
    Address: {
      type: String,
    },
    Email: {
      type: String,
      default: 0,
    },
    Category: {
      type: String,
    },
    LastUpdated: {
      type: Date,
    },
    BloodCount_Apos: {
      type: Number,
    },
    BloodCount_Aneg: {
      type: Number,
    },
    BloodCount_Bpos: {
      type: Number,
    },
    BloodCount_Bneg: {
      type: Number,
    },
    BloodCount_Opos: {
      type: Number,
    },
    BloodCount_Oneg: {
      type: Number,
    },
    BloodCount_ABpos: {
      type: Number,
    },
    BloodCount_ABneg: {
      type: Number,
    },
  },
  { timestamps: true }
);

bloodBankSchema.index(
  {
    Name: "text",
    Address: "text",
  },
  {
    weights: {
      Name: 5,
      Address: 2,
    },
  }
);

const BloodBank = mongoose.model("BloodBank", bloodBankSchema);

module.exports = { BloodBank };
