const bcrypt = require('bcrypt');

const { signupSchema } = require('../../../utils/validation');
const { CustomError } = require('../../../utils/helper');
const { getUserByEmailQuery, getUserByNameQuery, insertUserQuery } = require('../../../database/queries/users');
const { signToken } = require('../../../utils/jwt');

const signupController = (req, res, next) => {
  const { email, name, password, confirmPassword } = req.body;

  signupSchema.validateAsync({ email, name, password, confirmPassword }, { abortEarly: false })
    .then(() => getUserByEmailQuery(email))
    .then(data => {
      if (data.rowCount) {
        throw new CustomError('This email is already registered', 400);
      }
      return getUserByNameQuery(name);
    })
    .then(data => {
      if (data.rowCount) {
        throw new CustomError('This name is already taken', 400);
      }
      return bcrypt.hash(password, 10);
    })
    .then(hashedPassword => insertUserQuery(email, name, hashedPassword))
    .then(data => {
      const { id, name } = data.rows[0];
      return signToken({ id, name });
    })
    .then(token => {
      res
        .cookie('token', token, { httpOnly: true })
        .json({
          error: false,
          data: {
            message: 'User Created Successfully!'
          }
        });
    })
    .catch(err => {
      next(err);
    });
};

module.exports = signupController;
