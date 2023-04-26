const { addPostSchema } = require('../../../utils/validation');
const { addPostQuery } = require('../../../database/queries/posts');
const { getUserByIdQuery } = require('../../../database/queries/users');

const addPostController = (req, res, next) => {
  const { postText } = req.body;
  const postImg = req.file ? req.file.filename : null;
  const { id, name } = req.user;

  addPostSchema.validateAsync({ postText }, { abortEarly: false })
    .then(() => {
      return addPostQuery(id, postText, postImg);
    })
    .then(data => {
      const { postid, votecount, date } = data.rows[0];
      req.post = { postid, votecount, date };
      return getUserByIdQuery(id);
    })
    .then(data => {
      const userImage = data.rows[0].img;
      const { postid, votecount, date } = req.post;
      res
        .status(201)
        .json({
          error: false,
          data: {
            postid,
            name,
            userimage: userImage,
            posttext: postText,
            postimage: postImg,
            votecount,
            date,
            vote_state: 'none'
          }
        });
    })
    .catch(err => next(err));
};

module.exports = addPostController;
