const jwt = require('jsonwebtoken');

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
    const { userId, isBusiness, isAdmin } = getTokenParams(req, res);

    if (isBusiness || isAdmin) {
        next();
    } else {
        res.status(401).send('User not authorized');
    }
}

exports.adminGuard = (req, res, next) => {
    const { userId, isAdmin } = getTokenParams(req, res);

    if (isAdmin) {
        next();
    } else {
        res.status(401).send('User not authorized');
    }
}