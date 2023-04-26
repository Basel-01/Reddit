const { connection } = require('../../config');

const getAllCommentsQuery = (postId) => {
  const sql = {
    text: `SELECT users.name, users.img, comments.text, comments.date
            FROM users
            INNER JOIN comments
            ON users.id = comments.user_id
            WHERE post_id = $1;`,
    values: [postId]
  };

  return connection.query(sql);
};

module.exports = getAllCommentsQuery;
