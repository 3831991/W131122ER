const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    street: {
        type: String,
    },
    houseNamber: {
        type: Number,
    },
    zip: String,
});