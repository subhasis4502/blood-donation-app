const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const masterRecordSchema = mongoose.Schema({
  
  DonarRecord: {
      type: Schema.Types.ObjectId,
      ref: 'DonarRecord',
    },
  Quantity_ml: {
      type: Double,
    },
  RhGrouping: {
    type: String,  
  },
  DateOfCollection: {
    type: Date,
    },
  DateOfExpiry: {
    type: Date,
    },
  AntibodyTest: {
        type: Boolean,
        default: false,
    },
  MalariaTest: {
        type: Boolean,
        default: false,
    },
  HIVTest: {
        type: Boolean,
        default: false,
    },
  SyphilisTest: {
        type: Boolean,
        default: false,
    },
  HepatitisBTest: {
        type: Boolean,
        default: false,
    },
  IrregularAntibodyTest: {
        type: Boolean,
        default: false,
  }
}, {timestamps: true});




const MasterRecord = mongoose.model('MasterRecordSchema', masterRecordSchema);

module.exports = {MasterRecord};