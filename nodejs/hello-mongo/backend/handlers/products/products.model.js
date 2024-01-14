const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    createdTime: { type: Date, default: Date.now },
    price: Number,
    discount: Number,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    } 
});

exports.Product = mongoose.model("products", schema);