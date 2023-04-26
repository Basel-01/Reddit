const { getAllNotLoggedPostsQuery } = require('../../../database/queries/posts');

const getAllNotLoggedPostsController = (req, res, next) => {
  getAllNotLoggedPostsQuery()
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

module.exports = getAllNotLoggedPostsController;
