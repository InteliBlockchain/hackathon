const jwt = require('jsonwebtoken');

const getToken = (secret) => {
    const token = jwt.sign(
        { id: "testeDoVitin" },
        secret,
        { expiresIn: '30m' },
    );

    return token;
}

module.exports = getToken;