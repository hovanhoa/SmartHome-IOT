const express = require("express");
const DoorLogModel = require("../Models/DoorLogModel.js");

const router = express.Router();

router.get("/", (req, res) => {
    DoorLogModel.DoorLogModel.find(function (err, gas) {
    if (err) {
      console.log(err);
    } else {
      res.send(gas);
    }
  });
});

module.exports = router;
