const { getAllPostsQuery } = require('../../../database/queries/posts');

const getAllPostsController = (req, res, next) => {
  const { id } = req.user;

  getAllPostsQuery(id)
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

module.exports = getAllPostsController;
