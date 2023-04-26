const { verifyToken } = require('../utils/jwt');
const { CustomError } = require('../utils/helper');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.clearCookie('token');
    next(new CustomError('Unauthenticated!', 401));
  } else {
    verifyToken(token)
      .then(decoded => {
        req.user = decoded;
        next();
      })
      .catch(() => {
        res.clearCookie('token');
        next(new CustomError('Unauthorized!', 401));
      });
  }
};

module.exports = checkAuth;
