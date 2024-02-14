const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
    // Extract the JWT token from the Authorization header
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }

    // Verify the JWT token
    jwt.verify(token, 'json_web_token', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        } else {
            // If token is valid, you can attach the decoded payload to the request object
            req.user = decoded;
            next();
        }
    });
};
const authorization = (req, res, next) => {
    if (!req.user || !req.user.role) {
        return res.status(401).json({ message: 'Unauthorized: Missing role information' });
    }

    // Check user role
    if (req.user.role === 'admin') {
        // If user is an admin, allow access to admin routes
        next();
    } else if (req.user.role === 'user') {
        return res.status(403).json({ message: 'Forbidden: Access denied for users' });
    } else {
        // If user has an unrecognized role, deny access
        return res.status(403).json({ message: 'Forbidden: Unknown role' });
    }
};

module.exports = { authentication, authorization };
