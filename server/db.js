const mysql = require("mysql2/promise");
require("dotenv").config();

const dbUrl = new URL(process.env.DATABASE_URL);

const db = mysql.createPool({
  host: dbUrl.hostname,
  user: dbUrl.username,
  password: dbUrl.password,
  database: dbUrl.pathname.slice(1),
  port: dbUrl.port
});

module.exports = db;