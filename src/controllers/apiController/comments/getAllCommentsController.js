const { getAllCommentsQuery } = require('../../../database/queries/comments');

const getAllCommentsController = (req, res, next) => {
  const { postId } = req.params;

  getAllCommentsQuery(postId)
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

module.exports = getAllCommentsController;
