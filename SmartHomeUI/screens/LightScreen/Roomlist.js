import React, { useState, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  Switch,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppContext from "../AppContext.js";
//import CustomSwitch from 'react-native-custom-switch';

export default function DoorList() {
  const myContext = useContext(AppContext);

  const host = "io.adafruit.com";
  const ada_port = "443"; //web socket
  //const clientId = `mqtt_${Math.random().toString(16).slice(3)}`; => !!!!! ERROR MULTIPLE CLIENT !!!!!!
  const clientId = "mqtt_06092001_switchlight";
  const connectUrl = `mqtt://${host}:${ada_port}`;
  const switchlight_topic = "duy1711ak/feeds/iot-switchlight";
  const autolight_topic = "duy1711ak/feeds/iot-lightsys";

  const mqtt = require("mqtt");

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
    client.subscribe([switchlight_topic, autolight_topic], () => {
      console.log(`Subscribe to topic '${switchlight_topic}'`);
      console.log(`Subscribe to topic '${autolight_topic}'`);
    });
  });

  client.on("error", function (error) {
    console.log("Can't connect" + error);
  });

  const LightButtonClick1 = () => {
    if (myContext.lightSwitchValue1 == true) {
      client.publish(autolight_topic, "0");
    }
    if (myContext.lightButtonValue1 == true) {
      myContext.lightButtonClick1();
      client.publish(switchlight_topic, "0");
    } else {
      myContext.lightButtonClick1();
      client.publish(switchlight_topic, "1");
    }
  };
  const LightSwitchToggle1 = () => {
    if (myContext.lightSwitchValue1 == true) {
      myContext.lightToggleSwitch1(false);
      client.publish(autolight_topic, "0");
    } else {
      myContext.lightToggleSwitch1(true);
      client.publish(autolight_topic, "1");
    }
  };
  const light_on = (
    <Image
      style={styles.light_bulb}
      source={require("./assets/Light_on.png")}
    />
  );
  const light_off = (
    <Image
      style={styles.light_bulb}
      source={require("./assets/Light_off.png")}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        {/*Room 1*/}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.room_img_wrapper}>
              <Image
                style={styles.room_img}
                source={require("../assets/Door1.png")}
              />
              <Switch
                style={styles.toggle}
                onValueChange={LightSwitchToggle1}
                value={myContext.lightSwitchValue1}
                trackColor={{ true: "blue", false: "red" }}
              />
            </SafeAreaView>
            <SafeAreaView style={styles.room_info_wrapper}>
              <Text style={styles.room_info}>Living Room</Text>
              <TouchableOpacity
                style={styles.light_buld_wrapper}
                onPress={LightButtonClick1}
              >
                {myContext.lightButtonValue1 ? light_on : light_off}
              </TouchableOpacity>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>

        {/*Room 2*/}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.room_img_wrapper}>
              <Image
                style={styles.room_img}
                source={require("./assets/Kitchen.png")}
              />
              <Switch
                style={styles.toggle}
                onValueChange={myContext.lightToggleSwitch2}
                value={myContext.lightSwitchValue2}
                trackColor={{ true: "blue", false: "red" }}
              />
            </SafeAreaView>
            <SafeAreaView style={styles.room_info_wrapper}>
              <Text style={styles.room_info}>Kitchen</Text>
              <TouchableOpacity
                style={styles.light_buld_wrapper}
                onPress={myContext.lightButtonClick2}
              >
                {myContext.lightButtonValue2 ? light_on : light_off}
              </TouchableOpacity>
              <Text style={styles.room_info}></Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>

        {/*Room 3*/}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.room_img_wrapper}>
              <Image
                style={styles.room_img}
                source={require("./assets/terrace.png")}
              />
              <Switch
                style={styles.toggle}
                onValueChange={myContext.lightToggleSwitch3}
                value={myContext.lightSwitchValue3}
                trackColor={{ true: "blue", false: "red" }}
              />
            </SafeAreaView>
            <SafeAreaView style={styles.room_info_wrapper}>
              <Text style={styles.room_info}>Terrace</Text>
              <TouchableOpacity
                style={styles.light_buld_wrapper}
                onPress={myContext.lightButtonClick3}
              >
                {myContext.lightButtonValue3 ? light_on : light_off}
              </TouchableOpacity>
              <Text style={styles.room_info}></Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>

        {/*Room 4*/}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.room_img_wrapper}>
              <Image
                style={styles.room_img}
                source={require("./assets/garden.png")}
              />
              <Switch
                style={styles.toggle}
                onValueChange={myContext.lightToggleSwitch4}
                value={myContext.lightSwitchValue4}
                trackColor={{ true: "blue", false: "red" }}
              />
            </SafeAreaView>
            <SafeAreaView style={styles.room_info_wrapper}>
              <Text style={styles.room_info}>Garden</Text>
              <TouchableOpacity
                style={styles.light_buld_wrapper}
                onPress={myContext.lightButtonClick4}
              >
                {myContext.lightButtonValue4 ? light_on : light_off}
              </TouchableOpacity>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "red",
    width: "100%",
    height: "66%",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    //backgroundColor: "blue",
    width: "88%",
    height: "66vh",
    //alignItems: "center",
    //justifyContent: "center",
  },
  card: {
    //backgroundColor: "purple",
    height: "16.5vh",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    backgroundColor: "#575252",
    width: "88%",
    height: "88%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
  },
  room_img_wrapper: {
    //backgroundColor: "purple",
    width: "100%",
    height: "67%",
  },
  room_info_wrapper: {
    //backgroundColor: "red",
    width: "90%",
    height: "33%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toggle: {
    //backgroundColor: "red",
    flexDirection: "row",
    alignItems: "right",
    justifyContent: "space-between",
    marginLeft: "81.3%",
    marginTop: "-25%",
  },
  light_buld_wrapper: {
    //backgroundColor: "red",
    width: "17%",
    height: "100%",
    marginLeft: "60%",
    marginTop: "1%",
    alignItems: "center",
    justifyContent: "center",
  },
  light_bulb: {
    //backgroundColor: "red",
    width: "100%",
    height: "100%",
  },
  room_img: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },
  room_info: {
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#FDA43C",
    fontWeight: "bold",
  },
});
