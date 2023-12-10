const mongoose = require('mongoose');

module.exports = app => {
    const schema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        phone: String,
        email: String,
    });

    const Client = mongoose.model("clients", schema);

    app.get('/clients', async (req, res) => {
        res.send(await Client.find());
    });
}