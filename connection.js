const { Client } = require("pg");

const client = new Client({
  host: "0.0.0.0",
  user: "postgres",
  port: 5432,
  password: "Y19870804f!",
  database: "lost_and_found_development",
});

module.exports = client;
