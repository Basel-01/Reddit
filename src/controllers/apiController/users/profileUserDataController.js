const { getUserByNameQuery } = require('../../../database/queries/users');

const profileUserDataController = (req, res, next) => {
  const loggedUserName = req.user.name;
  const ProfileUserName = req.params.username;
  getUserByNameQuery(ProfileUserName)
    .then(data => {
      const { name, img } = data.rows[0];
      if (loggedUserName === ProfileUserName) {
        res
          .status(200)
          .json({
            error: false,
            data: {
              logged: true,
              info: { name, img }
            }
          });
      } else {
        res
          .status(200)
          .json({
            error: false,
            data: {
              logged: false,
              info: { name, img }
            }
          });
      }
    })
    .catch(err => next(err));
};

module.exports = profileUserDataController;
