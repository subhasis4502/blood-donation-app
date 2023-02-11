const express = require('express');
const router = express.Router();
const {BloodBank} = require('../models/BloodBank');

router.post("/getBloodbanks", (req, res) => {
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    // let skip = parseInt(req.body.skip);
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
      BloodBank.find()
        .populate("writer")
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, products) => {
          if (err) return res.status(400).json({ success: false, err });
          res
            .status(200)
            .json({ success: true, products, postSize: products.length });
        });
    }
  });

module.exports = router;
