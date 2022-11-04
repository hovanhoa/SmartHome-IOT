const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Notification = new Schema({
  type: String,
  content: String,
  date: Date,
});

module.exports = mongoose.model("Notification", Notification, "Notification");
