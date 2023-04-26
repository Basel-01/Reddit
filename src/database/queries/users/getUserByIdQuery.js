const { connection } = require('../../config');

const getUserByIdQuery = (id) => {
  const sql = {
    text: `SELECT * FROM users
            WHERE id = $1;`,
    values: [id]
  };

  return connection.query(sql);
};

module.exports = getUserByIdQuery;
