const express = require("express");

const Humidity = require("../Models/HumidityModel.js");
const router = express.Router();

router.get("/", (req, res) => {
    Humidity.find(function (err, humi) {
    if (err) {
      console.log(err);
    } else {
      res.send(humi);
    }
  });
});

module.exports = router;
