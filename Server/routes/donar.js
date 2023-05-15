const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/register", (req, res) => {
  const {
    name,
    email,
    state,
    district,
    phone_number,
    pin_code,
    password,
    address,
    age,
    height_cms,
    weight_kgs,
    medical_exam,
    blood_group,
  } = req.body;

  const query =
    "INSERT INTO donors (Name, Email, State, District, Phone_number, pin_Code, Password, Address, Age, Height_cms, Weight_kgs, Medical_exam, Blood_Group) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
  const values = [
    name,
    email,
    state,
    district,
    phone_number,
    pin_code,
    password,
    address,
    age,
    height_cms,
    weight_kgs,
    medical_exam,
    blood_group,
  ];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    console.log(`Inserted ${result.affectedRows} row(s)`);
    res.status(200).send("Data inserted into MySQL table!");
  });
});

router.post("/login", (req, res) => {
  // console.log(donar._id);
  const query = `select * from donors where email="${req.body.email}"`;
  db.query(query, (err, result) => {
    if (result.length === 0)
      res.status(200).json({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });
    else if (req.body.password === result[0].password)
      res.status(200).json({
        loginSuccess: true,
        person: result[0],
      });
    else
      res.status(200).json({
        loginSuccess: false,
        message: "Wrong password",
      });
  });
});

router.post("/bloodRequest", (req, res) => {
  const {
    Name,
    Email,
    Gender,
    Age,
    State,
    District,
    PhoneNumber,
    ReasonForBloodRequirement,
    Address,
    Hospital,
    Recommendation,
  } = req.body;

  // create SQL query to insert data into 'blood_request' table
  const query = `INSERT INTO blood_request (name, email, gender, age, state, district, phone_number, reason_for_blood_requirement, address, hospital, recommendation) VALUES ('${Name}', '${Email}', '${Gender}', ${Age}, '${State}', '${District}', '${PhoneNumber}', '${ReasonForBloodRequirement}', '${Address}', '${Hospital}', '${Recommendation}')`;

  db.query(query, (err, result) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      donar: req.body,
    });
  });

});

router.post("/getBloodcamps", (req, res) => {
  
  const query = `select * from donor_camp where District='${req.body.city}' && State='${req.body.state}'`;
  db.query(query, (err, result) => {
    if (err) res.status(404).send(err);
    res.status(200).send(result);
  });
});

module.exports = router;
