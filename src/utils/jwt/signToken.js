const { sign } = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const signToken = (payload) => new Promise((resolve, reject) => {
  sign(payload, SECRET_KEY, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});

module.exports = signToken;
