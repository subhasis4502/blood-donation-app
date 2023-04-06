// MySQL Database connection
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "db4free.net",
  user: "subhasis4502",
  password: "Subhasis@4502",
  database: "blood_proj_app",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Mysql Connected");
  }
});

module.exports = db;
