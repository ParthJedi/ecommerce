import { config } from 'dotenv';
import jwt, { decode } from 'jsonwebtoken';

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

const isAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if(token) {
        const onlyToken = token.slice(7, token.length);
        jwt.verify(onlyToken, config.JWT_SECRET_KEY, (error, decode) => {
            if(error) {
                return res.status(401).send({message: 'Invlaid Token'})
            }
            req.user = token;
            next();
            return;
        })
    } else {
        return res.status(401).send({message: "Token is not provided."})
    }
};

const isAdmin = (req, res, next) => {
    if(req.user && req.user.isAdmin) {
        return next();
    }
    return res.status(401).send({message: "Admin Token is not valid."})
}

export {
    getToken,
    isAuth,
    isAdmin
}

