const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        if (!authHeader) {
            throw new Error("Authorization Header not present.");
        }
        const token = authHeader.replace('Bearer ', '');
        const data = jwt.verify(token, process.env.JWT_KEY);
        console.log(data);
        next();
    }
    catch (error) {
        res.status(401).send({ error: error });
    }
}

module.exports = auth;