const con = require('../sqlConnection');
const guard = require('../guard');

module.exports = app => {

    app.get('/dashboard/products/amount', guard, (req, res) => {
        con.query("SELECT COUNT(id) amount FROM `products`", (err, result) => {
            if (err) throw err;

            const obj = result.pop();

            res.send(obj.amount.toString());
        });
    });

    app.get('/dashboard/products/avg', guard, (req, res) => {
        con.query("SELECT AVG(price) avg FROM `products`", (err, result) => {
            if (err) throw err;

            const obj = result.pop();

            res.send(obj.avg.toString());
        });
    });

    app.get('/dashboard/products/max', guard, (req, res) => {
        con.query("SELECT MAX(price) max FROM `products`", (err, result) => {
            if (err) throw err;

            const obj = result.pop();

            res.send(obj.max.toString());
        });
    });

    app.get('/dashboard/products/min', guard, (req, res) => {
        con.query("SELECT MIN(price) min FROM `products`", (err, result) => {
            if (err) throw err;

            const obj = result.pop();

            res.send(obj.min.toString());
        });
    });

}