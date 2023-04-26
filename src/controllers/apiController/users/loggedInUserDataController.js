const { getUserByIdQuery } = require('../../../database/queries/users');

const loggedInUserDataController = (req, res, next) => {
  const { id } = req.user;
  getUserByIdQuery(id)
    .then(data => {
      const { name, img } = data.rows[0];
      res
        .status(200)
        .json({
          error: false,
          data: { name, img }
        });
    })
    .catch(err => next(err));
};

module.exports = loggedInUserDataController;
