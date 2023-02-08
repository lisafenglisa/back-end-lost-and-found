const { Client } = require("pg");
require("dotenv").config();

// const client = new Client({
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   password: "Y19870804f!",
//   database: "lost_and_found_development",
// });

const client = new Client({
  host: process.env.HOST,
  user: process.env.USER,
  port: 5432,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = client;
