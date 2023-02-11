const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crossMatchRecordSchema = mongoose.Schema({
  
  DonarRecord: {
      type: Schema.Types.ObjectId,
      ref: 'DonarRecord',
    },
  Donar: {
      type: Schema.Types.ObjectId,
      ref: 'Donar',
    },
  DateOfCrossMatch: {
    type: Date,
  },
  RhGrouping: {
    type: String,  
  },
  IrregularAntibodyDetection: {
        type: Boolean,
        default: false,
    },
  CrossMatchCompatibility: {
        type: Boolean,
        default: false,
    },
  IndicationOfTransfusion: {
        type: Boolean,
        default: false,
    },
  LTApproval: {
        type: Boolean,
        default: false,
    },
  MOCApproval: {
        type: Boolean,
        default: false,
    },
  
}, {timestamps: true});




const CrossMatchRecordSchema = mongoose.model('CrossMatchRecordSchema', crossMatchRecordSchema);

module.exports = {CrossMatchRecordSchema};