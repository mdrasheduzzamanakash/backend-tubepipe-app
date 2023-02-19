const express = require('express');

const { decode, verify } = require('jsonwebtoken');
const { CreateJWTToken } = require('../helpers/jwt.token.signVerify');
const { VerifyWithGoogle } = require('../middlewares/authMiddlewares/auth.middleware');

const RegisterRoute = express.Router();



RegisterRoute.post('/google', (req, res) => {
    const token = req.get('authorizationToken')
    VerifyWithGoogle(token, (payload) => {
        // payload from google is here 
        let userInfo = {
            email: payload.email,
            name: payload.name,
            picture: payload.picture,
            email_verified: payload.email_verified,
        }

        let exp = 60 * 60 * 24 * 7;
        const jwtToken = CreateJWTToken(userInfo, exp);
        const decodedToken = decode(jwtToken, { algorithms: ['HS256'] });
        // res.cookie('jwt', jwtToken);
        res.send(decodedToken)
    });

});



RegisterRoute.get('/', (req, res) => {
    res.send('Not possible!')
})


module.exports = RegisterRoute;