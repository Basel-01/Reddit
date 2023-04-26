const { connection } = require('../../config');

const updatePostVoteCountQuery = (value, postId) => {
  const sql = {
    text: `UPDATE posts
            SET vote_count = vote_count + $1
            WHERE id = $2;`,
    values: [value, postId]
  };

  return connection.query(sql);
};

module.exports = updatePostVoteCountQuery;
