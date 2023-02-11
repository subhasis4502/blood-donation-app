const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bloodIssueSchema = mongoose.Schema({
  
  DonarRecord: {
      type: Schema.Types.ObjectId,
      ref: 'DonarRecord',
    },
  Donar: {
      type: Schema.Types.ObjectId,
      ref: 'Donar',
    },
  DateOfIssue: {
    type: Date,
    },
  RhGrouping: {
    type: String,  
  },
  Quantity_ml: {
    type: Double,
       
    },
  Unit: {
    type: String,
    },
  Crossmatch: {
    type: Boolean,
    default: false,
    },
  IndicationOfTransfusion: {
        type: Boolean,
        default: false,
    },
  MOCApproval: {
    type: Boolean,
    default: false,
    },
  
}, {timestamps: true});




const BloodIssueSchema = mongoose.model('BloodIssueSchema', bloodIssueSchema);

module.exports = {BloodIssueSchema};