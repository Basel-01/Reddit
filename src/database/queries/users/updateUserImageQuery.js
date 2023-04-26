const { connection } = require('../../config');

const updateUserImageQuery = (name, img) => {
  const sql = {
    text: `UPDATE users
            SET img = $2
            WHERE name = $1;`,
    values: [name, img]
  };

  return connection.query(sql);
};

module.exports = updateUserImageQuery;
