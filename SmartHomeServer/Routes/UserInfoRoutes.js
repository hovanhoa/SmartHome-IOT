const express = require("express");
const UserInfo = require("../Models/UserInfoModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  UserInfo.find(function (err, UserInfos) {
    if (err) {
      console.log(err);
    } else {
      res.send(UserInfos);
    }
  });
});

router.post("/update", async (req, res) => {
  // console.log(req.body);
  const filter = { email: req.body.email };
  const update = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    gender: req.body.gender,
    birthday: req.body.birthday,
  };
  console.log(update);
  const opts = { new: true };

  UserInfo.findOneAndUpdate(filter, update, function (err, res) {
    if (err) throw err;
    console.log("1 document updated");
  });
});

function insertRecord(req, res) {
  var users = new UserInfo();
  users.firstname = req.body.firstname;
  users.lastname = req.body.lastname;
  users.phone = req.body.phone;
  users.gender = req.body.gender;
  users.birthday = req.body.birthday;
  users.email = req.body.email;
  users.save((err, doc) => {
    if (!err) {
    } else {
      console.log(err);
    }
  });
}

function updateRecord(req, res) {
  console.log(req.body);
  UserInfo.findOneAndUpdate(
    { email: req.body.email },
    {
      $set: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        gender: req.body.gender,
        birthday: req.body.birthday,
      },
    },
    { returnDocument: "after" },
    (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }

      console.log(doc);
    }
  );
}

module.exports = router;
