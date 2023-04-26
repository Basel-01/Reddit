const { addCommentQuery } = require('../../../database/queries/comments');
const { getUserByIdQuery } = require('../../../database/queries/users');

const addCommentController = (req, res, next) => {
  const userId = req.user.id;
  const { name } = req.user;
  const { postId } = req.params;
  const { commentText } = req.body;

  addCommentQuery(userId, postId, commentText)
    .then(data => {
      const { date } = data.rows[0];
      req.commentDate = date;
      return getUserByIdQuery(userId);
    })
    .then(data => {
      const { img } = data.rows[0];
      res
        .status(201)
        .json({
          error: false,
          data: {
            name,
            img,
            date: req.commentDate,
            text: commentText
          }
        });
    })
    .catch(err => next(err));
};

module.exports = addCommentController;
