import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, Image, Text } from "react-native";
import AppContext from "../AppContext";

export default function ClimateInfo() {
  const myContext = useContext(AppContext);
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.wrapper}>
        <SafeAreaView style={styles.temp_info}>
          <Image
            style={styles.temp_img}
            source={require("../assets/temp.png")}
          />
          <Text style={styles.tempVal}>{myContext.temperature}°C</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.humid_info}>
          <Image
            style={styles.humid_img}
            source={require("../assets/water.png")}
          />
          <Text style={styles.humidVal}>{myContext.humidity}%</Text>
        </SafeAreaView>
      </SafeAreaView>
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
    width: "74%",
    height: "98%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  temp_info: {
    //backgroundColor: "purple",
    width: "100%",
    height: "46%",
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
    borderColor: "#FDA43C",
  },
  humid_info: {
    //backgroundColor: "yellow",
    width: "100%",
    height: "46%",
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
    borderColor: "#4838FF",
  },
  temp_img: {
    width: "22%",
    height: "48%",
  },
  tempVal: {
    backgroundColor: "transparent",
    fontSize: 50,
    color: "#FDA43C",
  },
  humid_img: {
    width: "22%",
    height: "48%",
  },
  humidVal: {
    backgroundColor: "transparent",
    fontSize: 50,
    color: "#4838FF",
  },
});
