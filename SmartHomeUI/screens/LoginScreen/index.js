import * as React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Header from "./Header";
import Form from "./Form";
import ForgotPassword from "./ForgotPassword";
import LoginButton from "./LoginButton";
import Footer from "./Footer";

export default function index({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#575252", "#282828", "#000000"]}
        style={styles.background}
      />
      <Header  navigation={navigation}/>
      <Form />
      <ForgotPassword  navigation={navigation}/>
      <LoginButton navigation={navigation} />
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
