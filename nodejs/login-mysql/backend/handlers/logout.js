const con = require('../sqlConnection');

module.exports = app => {

    app.get('/logout', (req, res) => {
        delete req.session.user;

        res.send();
    });

}