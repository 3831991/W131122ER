const con = require('../sqlConnection');

module.exports = app => {
    
    app.post("/signup", (req, res) => {

        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(403).send({ message: 'What?????' });
        }

        con.query(
            "INSERT INTO `users`(`fullName`, `email`, `password`) VALUES (?, ?, MD5(?))",
            [fullName, email, password],
            (err, result) => {
                if (err) {
                    return res.status(500).send({ message: 'Error' });
                }

                res.end();
            });

    });

}