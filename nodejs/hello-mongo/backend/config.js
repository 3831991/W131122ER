const jwt = require('jsonwebtoken');

exports.getLoggedUserId = (req, res) => {
    if (!req.headers.authorization) {
        return null;
    }

    const data = jwt.decode(req.headers.authorization, process.env.JWT_SECRET);

    if (!data) {
        return res.status(401).send('User not authorized');
    }

    return data.userId;
}
