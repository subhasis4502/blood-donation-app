const express = require("express");
const router = express.Router();
const axios = require("axios");
const db = require("../db");

router.get("/", (req, res) => {
  const query = `select * from social_data`;
  db.query(query, (err, result) => {
    if (err) res.status(404).send(err);
    res.status(200).send(result);
  });
});

router.post("/getAddress", (req, res) => {
  const apiKey = "35ece6a0754249019ffd6cce0407c130";

  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    req.body.hospitalName
  )}&key=${apiKey}&language=en&pretty=1`;

  axios
    .get(apiUrl)
    .then((response) => {
      // Get the code from the first result
      const result = response.data.results[0].components;
      res.send({
        name: result.hospital,
        road: result.road,
        city: result.city,
        district: result.district,
        state: result.state,
        pincode: result.postcode,
        country: result.country,
        continent: result.continent,
        lattitude: response.data.results[0].geometry.lat,
        longitude: response.data.results[0].geometry.lng,
      });
    })
    .catch((error) => {
      res.status(404).send(error.message);
    });
});

router.put("/setMessage", (req, res) => {
  const query = `UPDATE social_data SET Message_Sent = 1 WHERE id = '${req.body.id}'`;
  db.query(query, (err, result) => {
    if (err) res.status(404).send(err);
    res.status(200).send("Message Sent Successfully");
  });
});

router.post("/addRequest", (req, res) => {
  // Prreparing today's date
  let today = new Date();
  let day = today.getDate().toString().padStart(2, "0");
  let month = (today.getMonth() + 1).toString().padStart(2, "0"); // Add 1 to get the correct month
  let year = today.getFullYear();

  let currentDate = day + "/" + month + "/" + year;

  let {
    name,
    patientName,
    address,
    city,
    state,
    bloodType,
    bloodQuantity,
    emergency,
    phoneNumber,
    email,
  } = req.body;
  const query = `INSERT INTO social_data (Name, Patient_Name, Location, Blood_Type, Blood_Requirement, Patient_Type, Date_of_Post, Emergency, Phone_Number, Email_Id, Source, Message_Sent) VALUES ('${name}', '${patientName}', '${
    address + " " + city + " " + state
  }', '${bloodType}', '${
    bloodQuantity + "ml"
  }', 'Receiver', '${currentDate}', '${emergency}', '${phoneNumber}', '${email}', 'Website', 0);`;
  db.query(query, (err, result) => {
    if (err) res.status(404).send(err);
    res.status(200).send("Request added in the database");
  });
});

module.exports = router;
