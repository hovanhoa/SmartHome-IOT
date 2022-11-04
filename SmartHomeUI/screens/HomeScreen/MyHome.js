import { StyleSheet, Text, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import AppContext from "../AppContext.js";

export default function MyHome() {
  const myContext = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.text}>My Home</Text>
        <SafeAreaView style={styles.panel}>
          <SafeAreaView style={styles.panel_part1}>
            <Text style={styles.homeinfo1}>{myContext.temperature}°C</Text>
            <Text style={styles.homeinfo2}>{myContext.humidity}%</Text>
            <SafeAreaView style={styles.title_part}>
              <Text style={styles.title}>Climate</Text>
            </SafeAreaView>
          </SafeAreaView>
          <SafeAreaView style={styles.panel_part2}>
            <Text style={styles.homeinfo1}>
              {myContext.gasWarning == 1 ? "High" : "Low"}
            </Text>
            <SafeAreaView style={styles.title_part}>
              <Text style={styles.title}>Gas</Text>
            </SafeAreaView>
          </SafeAreaView>
          <SafeAreaView style={styles.panel_part3}>
            <Text style={styles.homeinfo1}>{myContext.numLightOn}/4</Text>
            <SafeAreaView style={styles.title_part}>
              <Text style={styles.title}>Light areas on</Text>
            </SafeAreaView>
          </SafeAreaView>
          <SafeAreaView style={styles.panel_part4}>
            <Text style={styles.homeinfo1}>{myContext.numDoorOn}/4</Text>
            <SafeAreaView style={styles.title_part}>
              <Text style={styles.title}>Doors on safe mode</Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "grey",
    width: "100%",
    height: "37%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "88%",
    height: "94%",
    //backgroundColor: "red",
    justifyContent: "space-between",
  },
  panel: {
    backgroundColor: "#FDA43C",
    width: "100%",
    height: "83%",
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  panel_part1: {
    //backgroundColor: "red",
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderWidth: 0.5,
    borderColor: "#EA9939",
  },
  panel_part2: {
    //backgroundColor: "red",
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 20,
    borderWidth: 0.5,
    borderColor: "#EA9939",
  },
  panel_part3: {
    //backgroundColor: "red",
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 20,
    borderWidth: 0.5,
    borderColor: "#EA9939",
  },
  panel_part4: {
    //backgroundColor: "red",
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 20,
    borderWidth: 0.5,
    borderColor: "#EA9939",
  },
  homeinfo1: {
    backgroundColor: "transparent",
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  homeinfo2: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  title_part: {
    //backgroundColor: "red",
  },
  title: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#000000",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 21,
    color: "#FDA43C",
    fontWeight: "bold",
  },
});
