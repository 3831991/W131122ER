const con = require('../sqlConnection');

module.exports = app => {

    app.post("/login", (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(403).send({ message: 'What?????' });
        }

        con.query("SELECT * FROM `users` WHERE `email` = ? AND `password` = MD5(?)", [email, password], (err, result) => {
            if (err) {
                return res.status(500).send({ message: 'Error' });
            }

            if (!result.length) {
                return res.status(403).send({ message: 'Email or password is not correct' });
            }

            res.send(result.pop());
        });
    });

}