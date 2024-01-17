const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    // isBusiness: { type: Boolean, default: false },
    // isAdmin: { type: Boolean, default: false },
    roleType: { type: Number, default: 0 },
});

exports.User = mongoose.model("users", schema);

exports.RoleTypes = {
    user: 0,
    business: 1,
    admin: 2,
    // master: 3,
}