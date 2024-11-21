import express from 'express';
import authenticateToken from '../authentication.js'; 

const router = express.Router();

router.get('/', authenticateToken, (req, res) => {

    const { userId, firstName, lastName, email } = req.user;

    return res.status(200).json({
        message: 'You are authenticated',
        user: { userId, firstName, lastName, email },
    });
    
});

export default router;
