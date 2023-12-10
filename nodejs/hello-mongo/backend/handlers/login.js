const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('./user.model');
const JWT_SECRET = "FullStack@#W131122ERROR!!!abc547770dffd";

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
        delete userObject.email;

        userObject.token = jwt.sign({ user: userObject }, JWT_SECRET, { expiresIn: '1h' });

        res.send(userObject);
    });

    app.get('/login', async (req, res) => {
        
    })
}