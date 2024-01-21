const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    url: {
        type: String,
    },
    alt: {
        type: String,
    },
});