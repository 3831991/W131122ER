const mongoose = require('mongoose');
const Image = require('../users/models/image.model');
const Address = require('../users/models/address.model');

const schema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
    },
    subTitle: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
        unique: true,
    },
    phone: String,
    email: String,
    address: Address,
    image: Image,
    web: String,
    likes: [String],
});

exports.User = mongoose.model('users', schema);