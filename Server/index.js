const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const donar = require('./routes/donar');
const bloodbank = require('./routes/bloodbank');



// Configuing environment variables
dotenv.config();

const app = express();

// Setting up some constants
//const BASE_URL = '/';

const PORT = process.env.PORT || 8080;

// Parse the json body
app.use(express.json());
// Parse url encoded form data
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//app.use(BASE_URL, ()=>{});
app.use(cors());
app.use(cookieParser());
app.use('/api/donars/', donar);
app.use('/api/bloodbanks/', bloodbank);

// Setup the mongoDB connection
const MONGODB_URL = process.env.MONGODB_URL;

// connect to mongodb
mongoose.connect(
    MONGODB_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
  // Start the App server
  // eslint-disable-next-line no-console
  console.log('Connected to mongoDB');
  // eslint-disable-next-line no-console
  app.listen(PORT, () => console.log('Listening to server on '+ PORT));
})
    .catch((err) => {
      // If not connected , exit the process
      // eslint-disable-next-line no-console
      console.log('Error while connecting to mongoDB', err);
      process.exit(1);
    });
