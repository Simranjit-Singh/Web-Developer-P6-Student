const jwt = require('jsonwebtoken');
require('dotenv').config();


const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(403).send("A token is required for authentication")
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
      req.user = decoded;
       return next();

    } catch (error) {
        return res.status(401).send("Invalid token");
    }
}

module.exports = verifyToken
