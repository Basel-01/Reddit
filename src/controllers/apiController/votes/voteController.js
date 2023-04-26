const { getPostByIdQuery, updatePostVoteCountQuery } = require('../../../database/queries/posts');
const { getUserVoteQuery, insertUserVoteQuery, updateVoteStateQuery } = require('../../../database/queries/votes');
const { CustomError } = require('../../../utils/helper');

const upVote = (req, res, next) => {
  const userId = req.user.id;
  const { voteType, postId } = req.params;

  getPostByIdQuery(postId)
    .then(data => {
      if (!data.rowCount) {
        next(new CustomError('No post found to vote!', 400));
      }
      req.voteInfo = {
        prevPostVoteCount: data.rows[0].vote_count
      };
      return getUserVoteQuery(userId, postId);
    }).then(data => {
      if (!data.rowCount) {
        return insertUserVoteQuery(userId, postId);
      }
      req.voteInfo = {
        ...req.voteInfo,
        voteId: data.rows[0].id,
        prevVoteState: data.rows[0].vote_state
      };
    })
    .then((newVoteId) => {
      if (newVoteId) {
        req.voteInfo = {
          ...req.voteInfo,
          voteId: newVoteId.rows[0].id,
          prevVoteState: 'none'
        };
      }
    })
    .then(() => {
      const { prevPostVoteCount, voteId, prevVoteState } = req.voteInfo;

      let newVoteState = '';
      let voteCountChange = 0;

      if (voteType === 'up') {
        if (prevVoteState === 'up') {
          newVoteState = 'none';
          voteCountChange = -1;
        } else if (prevVoteState === 'down') {
          newVoteState = 'up';
          voteCountChange = 2;
        } else if (prevVoteState === 'none') {
          newVoteState = 'up';
          voteCountChange = 1;
        }
      } else if (voteType === 'down') {
        if (prevVoteState === 'up') {
          newVoteState = 'down';
          voteCountChange = -2;
        } else if (prevVoteState === 'down') {
          newVoteState = 'none';
          voteCountChange = 1;
        } else if (prevVoteState === 'none') {
          newVoteState = 'down';
          voteCountChange = -1;
        }
      }
      updateVoteStateQuery(newVoteState, voteId);
      updatePostVoteCountQuery(voteCountChange, postId);
      res
        .status(200)
        .json({
          error: false,
          data: {
            voteState: newVoteState,
            voteCount: prevPostVoteCount + voteCountChange
          }
        });
    })
    .catch(err => next(err));
};

module.exports = upVote;
