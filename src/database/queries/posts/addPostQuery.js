const { connection } = require('../../config');

const addPostQuery = (userId, postText, postImage) => {
  const sql = {
    text: `INSERT INTO posts (user_id, text, img)
            VALUES ($1, $2, $3)
            RETURNING id AS postid, vote_count AS votecount, date`,
    values: [userId, postText, postImage]
  };

  return connection.query(sql);
};

module.exports = addPostQuery;
