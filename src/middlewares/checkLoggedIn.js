const { verifyToken } = require('../utils/jwt');

const checkLoggedIn = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    next();
  } else {
    verifyToken(token)
      .then(() => {
        res.redirct('/home');
      })
      .catch((err) => {
        res.clearCookie('token');
        next(err);
      });
  }
};

module.exports = checkLoggedIn;
