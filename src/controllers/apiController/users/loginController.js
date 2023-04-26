const bcrypt = require('bcrypt');

const { loginSchema } = require('../../../utils/validation');
const { CustomError } = require('../../../utils/helper');
const { getUserByNameQuery } = require('../../../database/queries/users');
const { signToken } = require('../../../utils/jwt');

const loginController = (req, res, next) => {
  const { name, password } = req.body;

  loginSchema.validateAsync({ name, password }, { abortEarly: false })
    .then(() => getUserByNameQuery(name))
    .then(data => {
      if (!data.rowCount) {
        throw new CustomError('Incorrect username or password', 400);
      }
      const { id, name, password } = data.rows[0];
      req.user = {
        id,
        name
      };
      return password;
    })
    .then(hashedPassword => {
      return bcrypt.compare(password, hashedPassword);
    })
    .then(result => {
      if (!result) {
        throw new CustomError('Incorrect username or password', 400);
      }
      return signToken(req.user);
    })
    .then(token => {
      res
        .cookie('token', token, { httpOnly: true })
        .json({
          error: false,
          data: {
            message: 'User Loged In Successfully!'
          }
        });
    })
    .catch(err => {
      next(err);
    });
};

module.exports = loginController;
