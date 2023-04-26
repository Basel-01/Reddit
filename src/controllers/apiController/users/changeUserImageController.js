const { updateUserImageQuery } = require('../../../database/queries/users');

const changeUserImageController = (req, res, next) => {
  const userName = req.user.name;
  const userImg = req.file ? req.file.filename : null;

  updateUserImageQuery(userName, userImg)
    .then(() => {
      res
        .status(200)
        .json({
          error: false,
          data: userImg
        });
    })
    .catch(err => next(err));
};

module.exports = changeUserImageController;
