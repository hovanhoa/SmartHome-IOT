const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for UserInfo
let UserInfo = new Schema({
  email: {
    type: String,
    key: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  phone: {
    type: String,
  },
  gender: {
    type: String,
  },
  birthday: {
    type: String,
  },
});

module.exports = mongoose.model("UserInfo", UserInfo, "UserInfo");

// userModel = mongoose.model("UserInfo", UserInfo, "UserInfo");

// module.exports = {
//   create: function (firstname, lastname, email, phone, gender, birthday) {
//     userModel.create(
//       {
//         email: email,
//         firstname: firstname,
//         lastname: lastname,
//         phone: phone,
//         gender: gender,
//         birthday: birthday,
//       },
//       function (err, docs) {
//         if (err) {
//           console.log(handleError(err));
//         } else {
//         }
//       }
//     );
//   },

//   addOne: function (firstname, lastname, email, phone, gender, birthday) {
//     let day = new Date(time.getFullYear(), time.getMonth(), time.getDate());
//     let myQuery = { email: email };
//     let newUpdate = {
//       $push: {
//         firstname: firstname,
//         lastname: lastname,
//         phone: phone,
//         gender: gender,
//         birthday: birthday,
//       },
//     };
//     userModel.updateOne(myQuery, newUpdate, function (err, docs) {
//       if (err) {
//         console.log(err);
//       } else {
//         if (docs.matchedCount == 0) {
//           userModel.create(
//             {
//               email: email,
//               firstname: firstname,
//               lastname: lastname,
//               phone: phone,
//               gender: gender,
//               birthday: birthday,
//             },
//             function (err, docs) {
//               if (err) {
//                 console.log(handleError(err));
//               } else {
//               }
//             }
//           );
//         }
//       }
//     });
//   },
// };
