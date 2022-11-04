const express = require("express");
const Account = require("../Models/AccountModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  Account.find(function (err, accounts) {
    if (err) {
      console.log(err);
    } else {
      res.send(accounts);
    }
  });
});

router.post("/login", (req, res) => {
  // console.log(req.body);
  const find = { email: req.body.email, password: req.body.password };
  console.log(find);

  Account.findOne(find, function (err, result) {
    if (err) throw err;
    else {
      if (result != null) {
        console.log(result.email);
        res.send(result.email);
      }
    }
  });
});

module.exports = router;
