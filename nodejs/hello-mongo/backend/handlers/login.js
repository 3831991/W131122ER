const bcrypt = require('bcrypt');
const { User } = require('./user.model');

module.exports = app => {
    app.post('/login', async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(403).send("Inputs cant be empty");
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(403).send("email or password is incorrect");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(403).send("email or password is incorrect");
        }

        const userObject = user.toObject();
        delete userObject.password;

        res.send(userObject);
    });
}