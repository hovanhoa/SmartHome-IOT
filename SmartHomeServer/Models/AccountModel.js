const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for account
let Account = new Schema({
  userId: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  isVerifying: {
    type: Number,
  },
  verifyCode: {
    type: String,
  },
  nNotification: {
    type: Number,
  },
});

module.exports = mongoose.model("Account", Account, "Account");
