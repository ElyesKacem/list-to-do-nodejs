const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    value: {
        required: true,
        type: String
    },
    state: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)