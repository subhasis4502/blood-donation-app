const express = require("express");
const router = express.Router();
const db = require("../db");
// const { Donar } = require("../models/Donor");
// const { BloodBank } = require("../models/BloodBank");
// const { DonarRegistration } = require("../models/DonarRegistration");
// const { DonarCamp } = require("../models/DonarCamp");
// const { BloodRequest } = require("../models/BloodRequest");

const { auth } = require("../middleware/auth");

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.donar._id,
    isAdmin: req.donar.role === 0 ? false : true,
    isAuth: true,
    email: req.donar.email,
    name: req.donar.name,
    lastname: req.donar.lastname,
    role: req.donar.role,
    image: req.donar.image,
  });
});

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
    rh_factor,
    blood_pressure,
    blood_unit_number,
    bag_segment_number,
    aadhaar_number,
    donar_credit_card_number,
    date_of_donation,
  } = req.body;

  const query =
    "INSERT INTO donors (Name, Email, State, District, Phone_number, PinCode, Password, Address, Age, Height_cms, Weight_kgs, MedicalExam, BloodGroup, RhFactor, BloodPressure, BloodUnitNumber, BagSegmentNumber, AadhaarNumber, DonarCreditCardNumber, DateOfDonation) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
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
    rh_factor,
    blood_pressure,
    blood_unit_number,
    bag_segment_number,
    aadhaar_number,
    donar_credit_card_number,
    date_of_donation,
  ];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    console.log(`Inserted ${result.affectedRows} row(s)`);
    res.status(200).send("Data inserted into MySQL table!");
  });

  // const donar = new Donar(req.body);
  // console.log(donar);
  // donar.save((err, doc) => {
  //   if (err) return res.json({ success: false, err });
  //   return res.status(200).json({
  //     success: true,
  //     donar: donar,
  //   });
  // });
});

router.post("/login", (req, res) => {
  // console.log(donar._id);
  const query = `select * from donors where Email="${req.body.email}"`;
  db.query(query, (err, result) => {
    if (result.length === 0)
      res.status(200).json({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });
    else if (req.body.password === result[0].Password)
      res.status(200).json({
        loginSuccess: true,
        person: result[0],
      });
    else
      res.status(200).json({
        loginSuccess: false,
        message: "Wrong password",
      });
    // res.status(200).send(result);
  });

  // Donar.findOne({ email: req.body.email }, (err, donar) => {
  //   if (!donar) {
  //     return res.json({
  //       loginSuccess: false,
  //       message: "Auth failed, email not found",
  //     });
  //   }

  //   donar.comparePassword(req.body.password, (err, isMatch) => {
  //     if (!isMatch) {
  //       return res.json({ loginSuccess: false, message: "Wrong password" });
  //     }
  //     console.log(donar._id);
  //     donar.generateToken((err, donar) => {
  //       if (err) return res.status(400).send(err);
  //       console.log(donar._id);
  //       res.cookie("w_authExp", donar.tokenExp);
  //       res.cookie("w_auth", donar.token).status(200).json({
  //         loginSuccess: true,
  //         donarId: donar._id,
  //       });
  //     });
  //   });
  // });
});

router.get("/logout", auth, (req, res) => {
  Donar.findOneAndUpdate(
    { _id: req.donar._id },
    { token: "", tokenExp: "" },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    }
  );
});

router.post("/getBloodbanks", (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  //let skip = parseInt(req.body.skip);
  let term = req.body.searchTerm;

  if (term) {
    BloodBank.find({ $text: { $search: term } })
      .populate("writer")
      .sort([[sortBy, order]])
      .limit(limit)
      .exec((err, products) => {
        if (err) return res.status(400).json({ success: false, err });
        res
          .status(200)
          .json({ success: true, products, postSize: products.length });
      });
  } else {
    BloodBank.find({}).then((results) => {
      return res.status(200).send(results);
    });
  }
});

router.post("/donarRegistration", (req, res) => {



  console.log("Reached");
  const donarRegistration = new DonarRegistration(req.body);
  console.log(donarRegistration);
  donarRegistration.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      donar: donarRegistration,
    });
  });
});

router.post("/bloodRequest", (req, res) => {
  const { Name, Email, Gender, Age, State, District, PhoneNumber, ReasonForBloodRequirement, Address, Hospital, Recommendation } = req.body;
  
  // create SQL query to insert data into 'blood_request' table
  const query = `INSERT INTO blood_request (name, email, gender, age, state, district, phone_number, reason_for_blood_requirement, address, hospital, recommendation) VALUES ('${Name}', '${Email}', '${Gender}', ${Age}, '${State}', '${District}', '${PhoneNumber}', '${ReasonForBloodRequirement}', '${Address}', '${Hospital}', '${Recommendation}')`;

  db.query(query, (err, result) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      donar: req.body,
    });
  });

  // const bloodRequest = new BloodRequest(req.body);
  // console.log(bloodRequest);
  // bloodRequest.save((err, doc) => {
  //   if (err) return res.json({ success: false, err });
  //   return res.status(200).json({
  //     success: true,
  //     donar: bloodRequest,
  //   });
  // });
});

router.post("/getBloodcamps", (req, res) => {
  // let order = req.body.order ? req.body.order : "desc";
  // let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  // let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  // let term = req.body.searchTerm;
  // console.log(term);
  // if (term) {
  //   DonarCamp.find({ $text: { $search: term } })
  //     .populate("writer")
  //     .sort([[sortBy, order]])
  //     .limit(limit)
  //     .exec((err, products) => {
  //       if (err) return res.status(400).json({ success: false, err });
  //       res
  //         .status(200)
  //         .json({ success: true, products, postSize: products.length });
  //     });
  // } else {
  //   DonarCamp.find({}).exec((err, products) => {
  //     if (err) return res.status(400).json({ success: false, err });
  //     res
  //       .status(200)
  //       .json({ success: true, products, postSize: products.length });
  //   });
  // }
  const query = `select * from donor_camp where District='${req.body.city}' && State='${req.body.state}'`;
  db.query(query, (err, result) => {
    if (err) res.status(404).send(err);
    res.status(200).send(result);
  });
});

module.exports = router;
