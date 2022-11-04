import * as React from "react";
import { StyleSheet, SafeAreaView, Image, Text } from "react-native";

export default function Title() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.wrapper}>
        <SafeAreaView style={styles.title}>
          <Image style={styles.img} source={require("../assets/temp.png")} />
          <Text style={styles.titleText}>Climate</Text>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "green",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    //backgroundColor: "blue",
    width: "90%",
    height: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    width: "38%",
    height: "100%",
    //backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleText: {
    backgroundColor: "transparent",
    fontSize: 21,
    color: "#FDA43C",
    fontWeight: "bold",
  },
  img: {
    width: 47,
    height: 62,
  },
});
