import { config } from 'dotenv/types';
import jwt from 'jsonwebtoken';

const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.email,
        email: user.email,
        isAdmin: user.isAdmin
        
    }, config.JWT_SECRET_KEY, {
        expiresIn: '12h'
    })
};

export {
    getToken
}