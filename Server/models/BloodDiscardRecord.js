const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bloodDiscardSchema = mongoose.Schema({
  
  DonarRecord: {
      type: Schema.Types.ObjectId,
      ref: 'DonarRecord',
    },
    DateOfCollection: {
    type: Date,
    },
  DateOfExpiry: {
    type: Date,
    },
  ReasonForDiscard: {
        type: String,
       
    },
  Remarks: {
        type: String,
    },
  
}, {timestamps: true});




const BloodDiscardSchema = mongoose.model('BloodDiscardSchema', bloodDiscardSchema);

module.exports = {BloodDiscardSchema};