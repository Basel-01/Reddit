const { connection } = require('../../config');

const getUserVoteQuery = (userId, postId) => {
  const sql = {
    text: `SELECT *
            FROM votes
            WHERE user_id = $1 AND post_id = $2;`,
    values: [userId, postId]
  };

  return connection.query(sql);
};

module.exports = getUserVoteQuery;
