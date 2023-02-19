const jwt = require('jsonwebtoken');

module.exports.CreateJWTToken = function CreateJWTToken(payload, exp) {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: exp });
    return token;
}

module.exports.VerifyJWTToken = function VerifyJWTToken(token, callback) {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            callback(err);
        } else {
            callback(payload);
        }
    });
}


