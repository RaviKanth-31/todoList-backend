const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    prem: {
        type: Boolean,
        required: true
    },
    ravi: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('ToDo', todoSchema);