const express = require("express");
const router = express.Router();
const db = require("../db");
const { BloodBank } = require("../models/BloodBank");

router.get("/", (req, res) => {
  const query = `select * from blood_stock`;
  db.query(query, (err, result) => {
    res.send(result);
  });
});

router.post("/getBloodbanks", (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : `S.No.`;
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  // let skip = parseInt(req.body.skip);
  let term = req.body.searchTerm || '';

  const query = "select * from blood_stock where `Blood Bank Name` like '%" + term + "%' order by `" + sortBy + "` " + order + " limit " + limit;

  // if (term) {
  //   BloodBank.find({ $text: { $search: term } })
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
  //   BloodBank.find()
  //     .populate("writer")
  //     .sort([[sortBy, order]])
  //     .skip(skip)
  //     .limit(limit)
  //     .exec((err, products) => {
  //       if (err) return res.status(400).json({ success: false, err });
  //       res
  //         .status(200)
  //         .json({ success: true, products, postSize: products.length });
  //     });
  // }

  db.query(query, (err, result) => {
    if(err) res.status(404).send(err);
    res.status(200).send(result);
  });
});

// Give the blood banks on a perticular state with available blood type
router.post("/getAvailBlood", (req, res) => {
  const query = `select * from blood_stock where ${req.body.type} >= '${req.body.quantity}' && (City='${req.body.city}' || State='${req.body.state}')`;

  db.query(query, (err, result) => {
    if(err) res.status(404).send(err);
    res.status(200).send(result);
  });
});

module.exports = router;
