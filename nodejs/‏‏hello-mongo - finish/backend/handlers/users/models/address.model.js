const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    houseNamber: {
        type: Number,
        required: true,
    },
    zip: String,
});