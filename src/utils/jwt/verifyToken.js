const { verify } = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const verifyToken = (token) => new Promise((resolve, reject) => {
  verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      reject(err);
    } else {
      resolve(decoded);
    }
  });
});

module.exports = verifyToken;
