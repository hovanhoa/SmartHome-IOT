const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let DoorLog = new Schema({
  userId: String,
  doorId: String,
  createAt: { type: Date },
  data: [
    {
      value: Number,
      time: Date,
    },
  ],
});

doorLogModel = mongoose.model("DoorLog", DoorLog, "DoorLog");

module.exports = {
  create: function (uid, doorid, time, value) {
    let month = new Date(time.getFullYear(), time.getMonth());
    doorLogModel.create(
      {
        userId: uid,
        doorId: doorid,
        createAt: month,
        data: [
          {
            value: value,
            time: time,
          },
        ],
      },
      function (err, docs) {
        if (err) {
          console.log(handleError(err));
        } else {
        }
      }
    );
  },

  addOne: function (uId, dId, time, value) {
    let month = new Date(time.getFullYear(), time.getMonth());
    let myQuery = { userId: uId, doorId: dId, createAt: month };
    let newUpdate = {
      $push: {
        data: {
          value: value,
          time: time,
        },
      },
    };
    doorLogModel.updateOne(myQuery, newUpdate, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        if (docs.matchedCount == 0) {
          doorLogModel.create(
            {
              userId: uId,
              doorId: dId,
              createAt: month,
              data: [
                {
                  value: value,
                  time: time,
                },
              ],
            },
            function (err, docs) {
              if (err) {
                console.log(handleError(err));
              } else {
              }
            }
          );
        }
      }
    });
  },
};
