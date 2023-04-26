const { Pool } = require('pg');

const { DEV_DB_URL, DATABASE_URL, NODE_ENV } = process.env;

const connection = new Pool({
  connectionString: NODE_ENV === 'production' ? DATABASE_URL : DEV_DB_URL,
  ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

module.exports = connection;
