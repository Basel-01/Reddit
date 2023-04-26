const { connection } = require('../../config');

const insertUserQuery = (email, name, hashedPassword) => {
  const sql = {
    text: `INSERT INTO users (email, name, password)
            VALUES ($1, $2, $3)
            RETURNING id, name;`,
    values: [email, name, hashedPassword]
  };

  return connection.query(sql);
};

module.exports = insertUserQuery;
