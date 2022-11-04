const express = require("express");
const GasLogModel = require("../Models/GasLogModel.js");

const router = express.Router();

router.get("/", (req, res) => {
    GasLogModel.gasLogModel.find(function (err, gas) {
    if (err) {
      console.log(err);
    } else {
      res.send(gas);
    }
  });
});

module.exports = router;
