import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authenticateToken = (req, res, next) => {
    console.log('JWT_SECRET:', process.env.JWT_SECRET);

    const authorizationHeader = req.headers['authorization'];
    const token = authorizationHeader && authorizationHeader.split(' ')[1];
    console.log('Extracted Token:', token);

    if (!token) {
        return res.status(401).json({ message: 'Authentication failed: Token not provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            console.error('Token verification error:', err.message);
            return res.status(403).json({ message: 'Forbidden: Token is invalid or expired' });
        }
        req.user = decodedToken;
        next();
    });
};

export default authenticateToken;
