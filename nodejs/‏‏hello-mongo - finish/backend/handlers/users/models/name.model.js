const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    first: {
        type: String,
        required: true,
    },
    middle: String,
    last: {
        type: String,
        required: true,
    },
});