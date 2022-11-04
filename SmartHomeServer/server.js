//Connect to feeds on adafruit.io
const mqtt = require("mqtt");
const host = "io.adafruit.com";
const ada_port = "1883";
const clientId = "mqtt_06092001_backend";
const TempModel = require("./Models/TemperatureModel.js");
const HumiModel = require("./Models/HumidityModel.js");
const gasLogModel = require("./Models/GasLogModel.js");
const doorLogModel = require("./Models/DoorLogModel.js");
const Notification = require("./Models/NotificationModel.js");

const connectUrl = `mqtt://${host}:${ada_port}`;

var client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 10000,
  username: "duy1711ak",
  password: "aio_wSsJ61gqapOCi1uvfve5DTHJtc3N",
  reconnectPeriod: 6000,
});

const arrTopic = [
  "iot-alarm",
  "iot-door",
  "iot-gas",
  "iot-humi",
  "iot-light",
  "iot-lightsys",
  "iot-secu",
  "iot-switchlight",
  "iot-temp",
];
const feed = "duy1711ak/feeds/";

client.on("connect", () => {
  console.log("Feeds Connected");
  for (let i = 0; i < arrTopic.length; i++) {
    let topic = feed + arrTopic[i];
    client.subscribe([topic], () => {
      console.log("Subscribe to topic " + topic);
    });
  }
});
client.on("error", function (error) {
  console.log("Can't connect" + error);
});
client.on("message", (topic, payload) => {
  console.log("Received Message:", topic, payload.toString());
  let time = new Date();
  if (topic == feed + "iot-temp") {
    TempModel.addOne("UID001", time, payload);
  }
  if (topic == feed + "iot-humi") {
    HumiModel.addOne("UID001", time, payload);
  }

  if (topic == feed + "iot-gas") {
    if (payload == 1) {
      // notification
      const type = "Gas Warning";
      const content = "There may be gas leak in your house !";
      const date = new Date();
      const newNotification = new Notification({
        type: type,
        content: content,
        date: date,
      });
      newNotification.save();
    }
    gasLogModel.addOne("UID001", time, payload);
  }
  if (topic == feed + "iot-door") {
    if (payload == 1) {
      const type = "Door Alert";
      const content = "Someone's just opened door 1 !!!";
      const date = new Date();
      const newNotification = new Notification({
        type: type,
        content: content,
        date: date,
      });
      newNotification.save();
      doorLogModel.addOne("UID001", "D001", time, 2);
    }
  }
  if (topic == feed + "iot-switchlight") {
    if (payload == 1) {
      const type = "Control Light";
      const content = "You've just TURNED ON living room lights !";
      const date = new Date();
      const newNotification = new Notification({
        type: type,
        content: content,
        date: date,
      });
      newNotification.save();
    }
    if (payload == 0) {
      const type = "Control Light";
      const content = "You've just TURNED OFF living room lights !";
      const date = new Date();
      const newNotification = new Notification({
        type: type,
        content: content,
        date: date,
      });
      newNotification.save();
    }
  }
  if (topic == feed + "iot-lightsys") {
    if (payload == 1) {
      const type = "Control Light Auto";
      const content = "The Light Auto Mode in living room is ON!";
      const date = new Date();
      const newNotification = new Notification({
        type: type,
        content: content,
        date: date,
      });
      newNotification.save();
    }
    if (payload == 0) {
      const type = "Control Light Auto";
      const content = "The Light Auto Mode in living room is OFF!";
      const date = new Date();
      const newNotification = new Notification({
        type: type,
        content: content,
        date: date,
      });
      newNotification.save();
    }
  }
  if (topic == feed + "iot-secu") {
    if (payload == 1) {
      const type = "Control Door Safe Mode";
      const content = "The Safe Mode of door 1 is ON!";
      const date = new Date();
      const newNotification = new Notification({
        type: type,
        content: content,
        date: date,
      });
      newNotification.save();
    }
    if (payload == 0) {
      const type = "Control Door Safe Mode";
      const content = "The Safe Mode of door 1 is OFF!";
      const date = new Date();
      const newNotification = new Notification({
        type: type,
        content: content,
        date: date,
      });
      newNotification.save();
    }
    doorLogModel.addOne("UID001", "D001", time, payload);
  }
});

// Create REST API
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://pipibapi1:13111620@cluster0.zfknm.mongodb.net/SmartHome",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Can not connect to the database " + err);
    }
  );
const accountRoute = require("./Routes/AccountRoutes.js");
const userInfoRoute = require("./Routes/UserInfoRoutes.js");
const tempRoute = require("./Routes/TempRoutes.js");
const HumidityRoute = require("./Routes/HumidityRoutes.js");
const notificationRoute = require("./Routes/NotificationRoutes.js");
const gasRoute = require("./Routes/GasRoute.js");
const doorRoute = require("./Routes/doorRoute.js");
const GasLogModel = require("./Models/GasLogModel.js");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("THIS IS THE CAFE COT DUA SMART HOME SERVER");
});
// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use("/account", accountRoute);
app.use("/userinfo", userInfoRoute);
app.use("/temp", tempRoute);
app.use("/gas", gasRoute);
app.use("/door", doorRoute);
app.use("/humidity", HumidityRoute);
app.use("/notification", notificationRoute);

app.listen(port, () =>
  console.log(`Server is Running on port: http://localhost:${port}`)
);
