/* eslint-disable new-cap */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donarRecordSchema = mongoose.Schema({

    BloodUnitNumber: {
        type: Number,
    },
    BagSegmentNumber: {
        type: Number,
    },
    MedicalExam: {
        type: String,
    },
    BloodPressure: {
        type: Double,
    },
    DateOfDonation: {
        type: Date,
    },

}, { timestamps: true });




const DonarRecord = mongoose.model('DonarRecord', donarRecordSchema);

module.exports = { DonarRecord };