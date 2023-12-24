const guard = require("../../guard");
const { Product } = require("./products.model");

module.exports = app => {
    app.get('/products', guard, async (req, res) => {
        res.send(await Product.find());
    });
}