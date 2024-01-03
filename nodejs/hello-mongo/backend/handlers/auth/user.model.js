const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    isBusiness: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
});

exports.User = mongoose.model("users", schema);
