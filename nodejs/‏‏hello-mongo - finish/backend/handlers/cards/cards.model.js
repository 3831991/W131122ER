const mongoose = require('mongoose');
const Image = require('../users/models/image.model');
const Address = require('../users/models/address.model');

const schema = new mongoose.Schema({
    title: String,
    subTitle: String,
    description: String,
    phone: String,
    email: String,
    address: Address,
    image: Image,
    web: String,
    likes: [String],
});

exports.Card = mongoose.model('cards', schema);