const { guard } = require("../../guards");
const { Product } = require("./products.model");
const { ProductValid } = require("./products.joi");
const { getTokenParams } = require("../../config");
const { User } = require("../auth/user.model");

module.exports = app => {
    const isProductMine = async (productId, req, res) => {
        const { userId } = getTokenParams(req, res);
        const product = await Product.findOne({ _id: productId, user_id: userId });

        return Boolean(product);
    }

    app.get('/products', guard, async (req, res) => {
        const { userId } = getTokenParams(req, res);

        const products = await Product.find({ user_id: userId });
        res.send(products);
    });

    app.get('/products/:id', guard, async (req, res) => {
        const { userId } = getTokenParams(req, res);

        const product = await Product.findOne({ _id: req.params.id, user_id: userId });

        if (!product) {
            return res.status(403).send("Product not found");
        }

        res.send(product);
    });

    app.post('/products', guard, async (req, res) => {
        const { name, price, discount } = req.body;

        const validate = ProductValid.validate(req.body, { abortEarly: false });

        if (validate.error) {
            const errors = validate.error.details.map(err => err.message);
            return res.status(403).send(errors);
        }

        const { userId } = getTokenParams(req, res);
        const product = new Product({ name, price, discount, user_id: userId });
        const obj = await product.save();

        res.send(obj);
    });
    
    app.put("/products/:id", guard, async (req, res) => {
        const { name, price, discount } = req.body;

        if (!name || !price || !discount) {
            return res.status(403).send("required parameters missing");
        }

        if (!await isProductMine(req.params.id, req, res)) {
            return res.status(401).send("User not authorized");
        }

        const obj = await Product.findByIdAndUpdate(req.params.id, { name, price, discount });

        if (!obj) {
            return res.status(403).send("Product not found");
        }

        res.send();
    });

    app.delete("/products/:id", guard, async (req, res) => {
        if (!await isProductMine(req.params.id, req, res)) {
            return res.status(401).send("User not authorized");
        }

        try {
            await Product.findByIdAndDelete(req.params.id);
        } catch (err) {
            return res.status(403).send("Product not found");
        }

        res.send();
    });
}