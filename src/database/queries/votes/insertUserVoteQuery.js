const { connection } = require('../../config');

const insertUserVoteQuery = (userId, postId) => {
  const sql = {
    text: `INSERT INTO votes (user_id, post_id, vote_state)
            VALUES ($1, $2, 'none')
            RETURNING id;`,
    values: [userId, postId]
  };

  return connection.query(sql);
};

module.exports = insertUserVoteQuery;
