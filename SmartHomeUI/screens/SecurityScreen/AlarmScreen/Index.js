import * as React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Header from "./Header.js";
import Title from "./Title.js";
import Alarm from "./Alarm.js";
import SSButton from "./SSButton.js";
import Footer from "./Footer.js";

export default function Index({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#575252", "#282828", "#000000"]}
        style={styles.background}
      />
      <Header navigation={navigation} />
      <Title />
      <Alarm navigation={navigation} />
      <SSButton navigation={navigation} />
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
