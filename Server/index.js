const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const donar = require("./routes/donar");
const bloodbank = require("./routes/bloodbank");
const socialdata = require("./routes/social-data");
const bodyparser = require('body-parser');
const mysql = require('mysql2');
const morgan = require("morgan");

// Configuing environment variables
dotenv.config();

const app = express();

// Setting up some constants
//const BASE_URL = '/';

const PORT = process.env.PORT || 8080;

// Parse the json body
app.use(express.json());
app.use(morgan("common"));
// Parse url encoded form data
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//app.use(BASE_URL, ()=>{});
app.use(cors());
app.use(bodyparser.json());
app.use(cookieParser());

// Setup the mongoDB connection
const MONGODB_URL = process.env.MONGODB_URL;

app.use("/api/donars/", donar);
app.use("/api/bloodbanks/", bloodbank);
app.use("/api/socialdata/", socialdata);

app.listen(PORT, () => console.log("Listening to server on " + PORT));
