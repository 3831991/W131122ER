const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
});

exports.User = mongoose.model("users", schema);
