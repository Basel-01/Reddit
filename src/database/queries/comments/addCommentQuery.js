const { connection } = require('../../config');

const addCommentQuery = (userId, postId, text) => {
  const sql = {
    text: `INSERT INTO comments (user_id, post_id, text)
            VALUES ($1, $2, $3)
            RETURNING date`,
    values: [userId, postId, text]
  };

  return connection.query(sql);
};

module.exports = addCommentQuery;
