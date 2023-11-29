module.exports = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.status(401).send({ message: 'User not logged in' });
    }
}