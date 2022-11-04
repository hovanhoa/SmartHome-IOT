const express = require("express");

const Temperature = require("../Models/TemperatureModel.js");
const Humidity = require("../Models/HumidityModel.js");
const router = express.Router();

router.get("/", (req, res) => {
  Temperature.find(function (err, temp) {
    if (err) {
      console.log(err);
    } else {
      res.send(temp);
    }
  });
});

module.exports = router;
