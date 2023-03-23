// MySQL Database connection
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "project_blood_app",
  port: 3307,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Mysql Connected");
});

module.exports = db;
