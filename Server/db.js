// MySQL Database connection
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blood_donation_app",
  port: 3307,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Mysql Connected");
});

module.exports = db;
