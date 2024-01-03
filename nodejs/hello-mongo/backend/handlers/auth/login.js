const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('./user.model');
const { JWT_SECRET, getUser } = require('../../config');
const guard = require("../../guard");

module.exports = app => {
    app.post('/users/login', async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(403).send("Inputs can't be empty");
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

        const token = jwt.sign({ user: userObject }, JWT_SECRET, { expiresIn: '1h' });

        res.send(token);
    });

    app.get('/login', guard, async (req, res) => {
        const user = getUser(req, res);

        res.send(user);
    });

    app.get('/users', guard, async (req, res) => {
        const users = await User.find().select("-password");

        res.send(users);
    });

    app.get('/users/:id', guard, async (req, res) => {
        const user = getUser(req, res);

        if (user._id !== req.params.id && !user.isAdmin) {
            return res.status(401).send('User not authorized');
        }

        const users = await User.findById(req.params.id).select("-password");

        res.send(users);
    });

    app.patch('/users/:id', guard, async (req, res) => {
        const user = getUser(req, res);

        if (user._id !== req.params.id) {
            return res.status(401).send('User not authorized');
        }

        const _user = await User.findById(req.params.id);

        _user.isBusiness = !_user.isBusiness;

        await _user.save();

        res.end();
    });


}