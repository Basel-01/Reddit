const { connection } = require('../../config');

const getAllNotLoggedPostsQuery = () => {
  const sql = {
    text: `SELECT users.name, users.img AS userimage, posts.text AS posttext, posts.img AS postimage, vote_count AS votecount, posts.date, COUNT(comments.id) AS comments_num
            FROM users
            INNER JOIN posts
            ON users.id = posts.user_id
            LEFT JOIN comments
            ON posts.id = comments.post_id
            GROUP BY posts.id, users.name, users.img
            ORDER BY posts.vote_count DESC;`,
    values: []
  };

  return connection.query(sql);
};

module.exports = getAllNotLoggedPostsQuery;
