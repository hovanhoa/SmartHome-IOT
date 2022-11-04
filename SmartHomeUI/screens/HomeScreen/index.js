import React, { useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppContext from "../AppContext.js";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function Index({ navigation }) {
  const myContext = useContext(AppContext);

  //Connect to feeds temperature and humidity
  const host = "io.adafruit.com";
  const ada_port = "443"; //web socket
  //const clientId = `mqtt_${Math.random().toString(16).slice(3)}`; => !!!!! ERROR MULTIPLE CLIENT !!!!!!
  const clientId = "mqtt_06092001";
  const connectUrl = `mqtt://${host}:${ada_port}`;
  const temp_topic = "duy1711ak/feeds/iot-temp";
  const humi_topic = "duy1711ak/feeds/iot-humi";
  const door_topic = "duy1711ak/feeds/iot-door";
  const gas_topic = "duy1711ak/feeds/iot-gas";
  const switchlight_topic = "duy1711ak/feeds/iot-switchlight";
  const autolight_topic = "duy1711ak/feeds/iot-lightsys";
  const autodoor_topic = "duy1711ak/feeds/iot-secu";

  const mqtt = require("mqtt");
  const Swal = require("sweetalert2");

  var client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 1000000,
    username: "duy1711ak",
    password: "aio_wSsJ61gqapOCi1uvfve5DTHJtc3N",
    reconnectPeriod: 600000,
  });

  client.on("connect", () => {
    console.log("Feeds Connected");
    client.subscribe(
      [
        temp_topic,
        humi_topic,
        door_topic,
        gas_topic,
        switchlight_topic,
        autolight_topic,
        autodoor_topic,
      ],
      () => {
        console.log(`Subscribe to topic '${temp_topic}'`);
        console.log(`Subscribe to topic '${humi_topic}'`);
        console.log(`Subscribe to topic '${door_topic}'`);
        console.log(`Subscribe to topic '${gas_topic}'`);
        console.log(`Subscribe to topic '${switchlight_topic}'`);
        console.log(`Subscribe to topic '${autolight_topic}'`);
        console.log(`Subscribe to topic '${autodoor_topic}'`);
      }
    );
  });

  client.on("error", function (error) {
    console.log("Can't connect" + error);
  });

  client.on("message", (topic, payload) => {
    if (topic == temp_topic) {
      myContext.SetTemperature(payload.toString());
    }
    if (topic == humi_topic) {
      myContext.SetHumidity(payload.toString());
    }
    if (topic == door_topic) {
      if (payload.toString() == "1") {
        Swal.fire({
          title: "Alert",
          text: "Someone's just opened door 1",
          icon: "warning",
          confirmButtonColor: "#FDA43C",
          confirmButtonText: "Confirm!",
        });
        navigation.navigate("Alarm");
      }
      myContext.SetDoor1Alert(payload);
    }
    if (topic == gas_topic) {
      if (payload.toString() == "1") {
        Swal.fire({
          title: "Warning",
          text: "There may be gas leak in your home!",
          icon: "warning",
          confirmButtonColor: "#FDA43C",
          confirmButtonText: "Confirm!",
        });
      }
      myContext.SetGasWarning(payload);
    }
    if (topic == switchlight_topic) {
      if (
        (payload.toString() == "1" && !myContext.lightButtonValue1) ||
        (payload.toString() == "0" && myContext.lightButtonValue1)
      ) {
        myContext.lightButtonClick1();
      }
    }
    if (topic == autolight_topic) {
      if (payload.toString() == "1" && !myContext.lightSwitchValue1) {
        myContext.lightToggleSwitch1(true);
      }
      if (payload.toString() == "0" && myContext.lightSwitchValue1) {
        myContext.lightToggleSwitch1(false);
      }
    }
    if (topic == autodoor_topic) {
      if (payload.toString() == "1" && !myContext.doorSwitchValue1) {
        myContext.doorToggleSwitch1(true);
      }
      if (payload.toString() == "0" && myContext.doorSwitchValue1) {
        myContext.doorToggleSwitch1(false);
      }
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#575252", "#282828", "#000000"]}
        style={styles.background}
      />
      <Header navigation={navigation} />
      <Body navigation={navigation} />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 22,
    color: "#FDA43C",
    fontWeight: "bold",
  },
});
export default Index;
