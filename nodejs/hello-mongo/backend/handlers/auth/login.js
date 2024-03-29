const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, RoleTypes } = require('./user.model');
const { getTokenParams } = require('../../config');
const { guard } = require("../../guards");

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

        const token = jwt.sign(
            {
                userId: user._id,
                roleType: user.roleType
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        );

        res.send(token);
    });

    app.get('/users', guard, async (req, res) => {
        const users = await User.find().select("-password");

        res.send(users);
    });

    app.get('/users/me', guard, async (req, res) => {
        const { userId } = getTokenParams(req, res);
        const user = await User.findById(userId).select("-password");

        if (!user) {
            return res.status(403).send('User not found');
        }
        
        res.send(user);
    });

    app.get('/users/:id', guard, async (req, res) => {
        const { userId } = getTokenParams(req, res);
        const user = await User.findById(userId);

        if (userId !== req.params.id && !user?.isAdmin) {
            return res.status(401).send('User not authorized');
        }

        try {
            const user = await User.findById(req.params.id).select("-password");

            if (!user) {
                return res.status(403).send('User not found');
            }

            res.send(user);
        } catch (err) {
            return res.status(403).send('User not found');
        }
    });

    app.patch('/users/:id', guard, async (req, res) => {
        const { userId } = getTokenParams(req, res);

        if (userId !== req.params.id) {
            return res.status(401).send('User not authorized');
        }

        const user = await User.findById(req.params.id);

        if (user.roleType == RoleTypes.user) {
            user.roleType = RoleTypes.business;
        } else if (user.roleType == RoleTypes.business) {
            user.roleType = RoleTypes.user;
        }

        await user.save();

        res.end();
    });


}