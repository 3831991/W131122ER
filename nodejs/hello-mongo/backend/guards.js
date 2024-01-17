const jwt = require('jsonwebtoken');
const { RoleTypes } = require('./handlers/auth/user.model');

exports.guard = (req, res, next) => {
    jwt.verify(req.headers.authorization, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            res.status(401).send('User not authorized');
        } else {
            next();
        }
    });
}

exports.businessGuard = (req, res, next) => {
    const { userId, roleType } = getTokenParams(req, res);

    if (roleType == RoleTypes.business || roleType == RoleTypes.admin) {
        next();
    } else {
        res.status(401).send('User not authorized');
    }
}

exports.adminGuard = (req, res, next) => {
    const { userId, roleType } = getTokenParams(req, res);

    if (roleType == RoleTypes.admin) {
        next();
    } else {
        res.status(401).send('User not authorized');
    }
}