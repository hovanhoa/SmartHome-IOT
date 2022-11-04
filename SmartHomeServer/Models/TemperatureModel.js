const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Temperature = new Schema({
  userId : String,
  createAt : { type: Date, default: Date.now },
  data : [
      {
          val: Number,
          time: Date
      }
  ]
});

module.exports = mongoose.model("Temperature", Temperature, "Temperature");

// module.exports = {
//     tempModel,
//     create : function(uid, time, value){
//         let day = new Date(time.getFullYear(), time.getMonth(), time.getDate());
//         tempModel.create({
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
//         tempModel.updateOne(myQuery, newUpdate, function (err, docs){
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 if (docs.matchedCount == 0) {
//                     tempModel.create({
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

