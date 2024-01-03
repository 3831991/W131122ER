const jwt = require('jsonwebtoken');
const JWT_SECRET = "FullStack@#W131122ERROR!!!abc547770dffd";

exports.getLoggedUserId = (req, res) => {
    if (!req.headers.authorization) {
        return null;
    }

    const data = jwt.decode(req.headers.authorization, JWT_SECRET);

    if (!data) {
        return res.status(401).send('User not authorized');
    }

    return data.userId;
}

exports.JWT_SECRET = JWT_SECRET;