const { getTokenParams } = require("../../config");
const { guard } = require("../../guards");
const { Product } = require("./products.model");

async function getMethod(method, req, res) {
    const result = await Product.aggregate().group({ _id: null, value: { ['$' + method]: '$price' } });
    return result.pop().value.toString();
}

module.exports = app => {
    app.get("/dashboard/products/amount", guard, async (req, res) => {
        const { userId } = getTokenParams(req, res);
        const amount = await Product.find({ user_id: userId }).countDocuments();
        
        res.send(amount.toString());
    });
    
    app.get("/dashboard/products/avg", guard, async (req, res) => {
        res.send(await getMethod('avg', req, res));
    });

    app.get("/dashboard/products/min", guard, async (req, res) => {
        res.send(await getMethod('min', req, res));
    });

    app.get("/dashboard/products/max", guard, async (req, res) => {
        res.send(await getMethod('max', req, res));
    });
}