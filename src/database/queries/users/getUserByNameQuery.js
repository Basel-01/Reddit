const { connection } = require('../../config');

const getUserByNameQuery = (name) => {
  const sql = {
    text: `SELECT * FROM users
            WHERE name = $1;`,
    values: [name]
  };

  return connection.query(sql);
};

module.exports = getUserByNameQuery;
