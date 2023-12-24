const bcrypt = require('bcrypt');
const { User } = require('./user.model');

module.exports = app => {
    app.post("/signup", async (req, res) => {
        const { email, fullName, password } = req.body;

        if (!email || !fullName || !password) {
            return res.status(403).send("Inputs cant be empty");
        }

        const user = new User({
            email,
            fullName,
            password: await bcrypt.hash(password, 10),
        });

        const newUser = await user.save();
        res.send(newUser);
    });
}