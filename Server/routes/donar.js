const express = require("express");
const router = express.Router();
const { Donar } = require("../models/Donor");
const { BloodBank } = require("../models/BloodBank");
const { DonarRegistration } = require("../models/DonarRegistration");
const { DonarCamp } = require("../models/DonarCamp");
const { BloodRequest } = require("../models/BloodRequest");

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
  const donar = new Donar(req.body);
  console.log(donar);
  donar.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      donar: donar,
    });
  });
});

router.post("/login", (req, res) => {
  // console.log(donar._id);
  Donar.findOne({ email: req.body.email }, (err, donar) => {
    if (!donar) {
      return res.json({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });
    }

    donar.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({ loginSuccess: false, message: "Wrong password" });
      }
      console.log(donar._id);
      donar.generateToken((err, donar) => {
        if (err) return res.status(400).send(err);
        console.log(donar._id);
        res.cookie("w_authExp", donar.tokenExp);
        res.cookie("w_auth", donar.token).status(200).json({
          loginSuccess: true,
          donarId: donar._id,
        });
      });
    });
  });
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
  console.log("Reached");
  const bloodRequest = new BloodRequest(req.body);
  console.log(bloodRequest);
  bloodRequest.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      donar: bloodRequest,
    });
  });
});

router.post("/getBloodcamps", (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let term = req.body.searchTerm;
  console.log(term);
  if (term) {
    DonarCamp.find({ $text: { $search: term } })
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
    DonarCamp.find({}).exec((err, products) => {
      if (err) return res.status(400).json({ success: false, err });
      res
        .status(200)
        .json({ success: true, products, postSize: products.length });
    });
  }
});

module.exports = router;
