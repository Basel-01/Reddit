const { connection } = require('../../config');

const updateVoteStateQuery = (voteState, voteId) => {
  const sql = {
    text: `UPDATE votes
            SET vote_state = $1
            WHERE id = $2;`,
    values: [voteState, voteId]
  };

  return connection.query(sql);
};

module.exports = updateVoteStateQuery;
