// const jwt = require("jsonwebtoken");

// const adminMiddleware = (req, res, next) => {
//     const authHeader = req.headers["authorization"];

//     if (!authHeader) {
//         return res.status(401).json({ error: "No token provided" });
//     }

//     const token = authHeader.split(" ")[1]; // Extract token after "Bearer"

//     if (!token) {
//         return res.status(401).json({ error: "Token missing" });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use JWT_SECRET from .env
//         req.admin = decoded; // Store decoded admin data in request
//         next();
//     } catch (error) {
//         return res.status(403).json({ error: "Invalid token" });
//     }
// };

// module.exports = adminMiddleware;

const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ error: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Token missing" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY); // ✅ JWT_KEY instead of JWT_SECRET
        req.admin = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ error: "Invalid token" });
    }
};

module.exports = adminMiddleware;
