const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Humidity = new Schema({
  userId : String,
  createAt : { type: Date, default: Date.now },
  data : [
      {
          val: Number,
          time: Date
      }
  ]
});

module.exports = mongoose.model("Humidity", Humidity, "Humidity");

// module.exports = {
//     create : function(uid, time, value){
//         let day = new Date(time.getFullYear(), time.getMonth(), time.getDate());
//         humiModel.create({
//             userId : uid,
//             createAt : day,
//             data : [
//                 {
//                     val: value,
//                     time: time
//                 }
//             ]
//         }, function (err, docs) {
//             if (err){
//                 console.log(handleError(err))
//             } 
//             else {
//                 console.log(docs);
//             }
//           });
//     },

//     addOne: function(uid, time, value){
//         let day = new Date(time.getFullYear(), time.getMonth(), time.getDate());
//         let myQuery = { userId : uid, createAt : day }
//         let newUpdate = {
//             $push: {data : {
//                             val: value,
//                             time: time
//                         }}
//         }
//         humiModel.updateOne(myQuery, newUpdate, function (err, docs){
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 if (docs.matchedCount == 0) {
//                     humiModel.create({
//                         userId : uid,
//                         createAt : day,
//                         data : [
//                             {
//                                 val: value,
//                                 time: time
//                             }
//                         ]
//                     }, function (err, docs) {
//                         if (err){
//                             console.log(handleError(err))
//                         } 
//                         else {
//                         }
//                       });
//                 }
//             }
//         })
//     }
// }

