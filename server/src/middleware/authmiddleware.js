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
            console.log(req.user)
            next();
        }
    });
};
const authorization = (req, res, next) => {
if(req.user.role === "admin"){
    return  next()
}
return res.json({msg: "Invalid"})

};

module.exports = {authentication,authorization};
