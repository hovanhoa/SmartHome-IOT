const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let GasLog = new Schema({
  userId : String,
  createAt : { type: Date},
  data : [
      {
          value: Number,
          time: Date
      }
  ]
});

gasLogModel = mongoose.model("GasLog", GasLog, "GasLog");

module.exports = {
    gasLogModel,
    create : function(uid, time){
        let month = new Date(time.getFullYear(), time.getMonth());
        monthVal = month.getTime();
        gasLogModel.create({
            userId : uid,
            createAt : monthVal,
            data : [
                {
                    value: value,
                    time: time
                }
            ]
        }, function (err, docs) {
            if (err){
                console.log(handleError(err))
            } 
            else {
            }
          });
    },

    addOne: function(uid, time, value){
        let month = new Date(time.getFullYear(), time.getMonth());
        monthVal = month.getTime();
        let myQuery = { userId : uid, createAt : monthVal }
        let newUpdate = {
            $push: {data : {
                            value: value,
                            time: time
                        }}
        }
        gasLogModel.updateOne(myQuery, newUpdate, function (err, docs){
            if (err) {
                console.log(err);
            }
            else {
                if (docs.matchedCount == 0) {
                    gasLogModel.create({
                        userId : uid,
                        createAt : monthVal,
                        data : [
                            {
                                value: value,
                                time: time
                            }
                        ]
                    }, function (err, docs) {
                        if (err){
                            console.log(handleError(err))
                        } 
                        else {
                        }
                      });
                }
            }
        })
    }
}

