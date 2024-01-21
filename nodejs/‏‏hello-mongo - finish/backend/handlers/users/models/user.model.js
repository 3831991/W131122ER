const mongoose = require('mongoose');
const Name = require('./name.model');
const Image = require('./image.model');
const Address = require('./address.model');

const schema = new mongoose.Schema({
    name: Name,
    email: {
        type: String,
        unique: true,
    },
    phone: String,
    password: String,
    address: Address,
    image: Image,
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isBusiness: {
        type: Boolean,
        default: false,
    },
    createTime: {
        type: Date,
        default: Date.now(),
    },
});

exports.User = mongoose.model('users', schema);