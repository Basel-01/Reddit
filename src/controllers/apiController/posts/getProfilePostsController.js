const { getProfilePostsQuery } = require('../../../database/queries/posts');

const getProfilePostsController = (req, res, next) => {
  const { username } = req.params;
  const loggedUserId = req.user.id;

  getProfilePostsQuery(loggedUserId, username)
    .then(data => {
      res
        .status(200)
        .json({
          error: false,
          data: data.rows
        });
    })
    .catch(err => next(err));
};

module.exports = getProfilePostsController;
