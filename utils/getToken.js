const jwt = require('jsonwebtoken');

const getToken = (secret) => {
    const token = jwt.sign(
        { id: "testeDoVitin" },
        secret,
        { expiresIn: '30s' },
    );

    return token;
}

module.exports = getToken;