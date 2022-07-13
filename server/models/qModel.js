const { Pool } = require('pg');
require('dotenv').config();


const PG_URI = 'postgres://blmcsufe:LuBfrjSIMlhGYBME5gWQfw9T8dhQOUhr@chunee.db.elephantsql.com/blmcsufe';
// SELECT * FROM "public"."persisted_neet_75_tables_problems_table_list_csv" 

const pool = new Pool({
  connectionString: process.env.PG_URI
});

module.exports = {
  query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
  }
};
