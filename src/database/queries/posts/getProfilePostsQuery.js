const { connection } = require('../../config');

const getProfilePostsQuery = (profileId, profileName) => {
  const sql = {
    text: `SELECT posts.id AS postid, users.name, users.img AS userimage, posts.text AS posttext, posts.img AS postimage, vote_count AS votecount, posts.date, votes.vote_state, COUNT(comments.id) AS comments_num
            FROM users
            INNER JOIN posts
            ON users.id = posts.user_id
            LEFT JOIN votes
            ON votes.user_id = $1 AND posts.id = votes.post_id
            LEFT JOIN comments
            ON posts.id = comments.post_id
            WHERE users.name = $2
            GROUP BY posts.id, users.name, users.img, votes.vote_state
            ORDER BY posts.vote_count DESC;`,
    values: [profileId, profileName]
  };

  return connection.query(sql);
};

module.exports = getProfilePostsQuery;
