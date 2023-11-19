const con = require('../sqlConnection');

module.exports = (app) => {

    app.get('/products', (req, res) => {
        con.query("SELECT * FROM `products`", (err, result) => {
            if (err) {
                throw err;
            }
        
            res.send(result);
        });
    });



}