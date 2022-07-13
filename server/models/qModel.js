const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.PG_URI
});

const createTable = `CREATE TABLE IF NOT EXISTS userSolutions (
  _id int,
  name VARCHAR(255),
  solution TEXT,
  upvotes INT
  );`;

  pool.query(createTable);

module.exports = {
  query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
  }
};
