const jwt = require("jsonwebtoken");
const secret = `${process.env.JWT_SECRET}`;

const jwtVerify = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Authentication failed" });
    }

    const jwtToken = authHeader.split(" ")[1];
    console.log(jwtToken);

    jwt.verify(jwtToken, secret, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(401).json({ error: "Invalid authentication token" });
        }
        if (!info) {
            console.log(info);
            return res.status(401).json({ error: "Invalid authentication token" });
        }
        
        next();
    });
};

module.exports = { jwtVerify };
