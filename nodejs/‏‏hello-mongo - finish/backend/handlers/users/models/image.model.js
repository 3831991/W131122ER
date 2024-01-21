const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
});