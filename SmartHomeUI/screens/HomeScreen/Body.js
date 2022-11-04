import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import MyHome from "./MyHome";
import Features from "./Features";

function Body({ navigation, publishTurnOnLight, publishTurnOffLight }) {
  return (
    <SafeAreaView style={styles.container}>
      <MyHome />
      <Features
        navigation={navigation}
        publishTurnOnLight={publishTurnOnLight}
        publishTurnOffLight={publishTurnOffLight}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "76%",
  },
});
export default Body;
