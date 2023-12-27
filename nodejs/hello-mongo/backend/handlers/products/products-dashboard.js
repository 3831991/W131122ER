const guard = require("../../guard");
const { Product } = require("./products.model");

async function getMethod(method) {
    const result = await Product.aggregate().group({ _id: null, value: { ['$' + method]: '$price' } });
    return result.pop().value.toString();
}

module.exports = app => {
    app.get("/dashboard/products/amount", guard, async (req, res) => {
        const amount = await Product.find().countDocuments();
        
        res.send(amount.toString());
    });
    
    app.get("/dashboard/products/avg", guard, async (req, res) => {
        // const result = await Product.aggregate().group({ _id: null, avg: { $avg: '$price' } });
        // const avg = result.pop().avg;

        // res.send(avg.toString());

        res.send(await getMethod('avg'));
    });

    app.get("/dashboard/products/min", guard, async (req, res) => {
        // const result = await Product.aggregate().group({ _id: null, minPrice: { $min: '$price' } });
        // const min = result.pop().minPrice;

        // res.send(min.toString());

        res.send(await getMethod('min'));
    });

    app.get("/dashboard/products/max", guard, async (req, res) => {
        // const result = await Product.aggregate().group({ _id: null, maxPrice: { $max: '$price' } });
        // const max = result.pop().maxPrice;

        // res.send(max.toString());

        res.send(await getMethod('max'));
    });
}