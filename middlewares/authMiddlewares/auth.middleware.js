const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

module.exports.VerifyWithGoogle =
    async function Verify(token, callback) {
        // console.log('token received -->', token);
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        });
        const payload = ticket.getPayload();
        // console.log(payload);
        callback(payload);
    }
