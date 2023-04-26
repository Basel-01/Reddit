const { connection } = require('../../config');

const getPostByIdQuery = (postId) => {
  const sql = {
    text: `SELECT *
            FROM posts
            WHERE id = $1;`,
    values: [postId]
  };

  return connection.query(sql);
};

module.exports = getPostByIdQuery;
