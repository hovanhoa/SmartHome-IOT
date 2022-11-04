import * as React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Header from "./Header";
import Footer from "./Footer";
import Statistic from "./Statistic_icon";
import Choice from "./Choice";
// import Threshold from "./Threshold";
// import Light from "./Light";

export default function Gas({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#575252", "#282828", "#000000"]}
        style={styles.background}
      />
      <Header navigation={navigation} />
      {/* <Gas_icon />
      <Threshold />
    <Light /> */}
      <Statistic navigation={navigation}/>
    <Choice navigation={navigation} />
    <SafeAreaView style={{marginTop:"100px"}}>

    </SafeAreaView>
      <Footer navigation={navigation} />
      
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
