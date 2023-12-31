import Joi from 'joi';

export const ProductValid = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    discount: Joi.number(),
});