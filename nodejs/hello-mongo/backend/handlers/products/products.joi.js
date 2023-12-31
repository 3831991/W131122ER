const Joi = require('joi');

exports.ProductValid = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    discount: Joi.number(),
});