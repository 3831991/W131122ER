const con = require('../sqlConnection');
const guard = require('../guard');

module.exports = (app) => {

    app.get('/products', (req, res) => {
        con.query("SELECT * FROM `products`", (err, result) => {
            if (err) {
                throw err;
            }
        
            res.send(result);
        });
    });

    app.get('/products/:id', guard, (req, res) => {
        con.query("SELECT * FROM `products` WHERE `id` = ?", [req.params.id], (err, result) => {
            if (err) {
                throw err;
            }

            if (!result.length) {
                return res.status(403).send("Product not found");
            }
        
            res.send(result.pop());
        });
    });

    app.post('/products', guard, (req, res) => {
        const { name, price, discount } = req.body;

        con.query("INSERT INTO `products`(`name`, `price`, `discount`) VALUES (?, ?, ?)", [name, price, discount], (err, result) => {
            if (err) {
                throw err;
            }

            const id = result.insertId;

            con.query("SELECT * FROM `products` WHERE `id` = ?", [id], (err, result) => {
                if (err) {
                    throw err;
                }
    
                res.send(result.pop());
            });
        });
    });

    app.put('/products/:id', guard, (req, res) => {
        const { name, price, discount } = req.body;

        con.query("UPDATE `products` SET `name` = ?, `price` = ?, `discount` = ? WHERE `id` = ?", [name, price, discount, req.params.id], (err, result) => {
            if (err) {
                throw err;
            }

            res.send();
        });
    });

    app.delete('/products/:id', guard, (req, res) => {
        con.query("DELETE FROM `products` WHERE `id` = ?", [req.params.id], (err, result) => {
            if (err) {
                res.status(500).send("Couldn't delete product");
            }
        
            res.send();
        });
    });

}