import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

export default function Safe() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.imgWrapper}>
        <Image style={styles.img} source={require("../assets/safe.png")} />
      </SafeAreaView>
      <SafeAreaView style={styles.textWrapper}>
        <Text style={styles.text}>Your house is safe</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "red",
    width: "100%",
    height: "46%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "52%",
    height: "88%",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 25,
    color: "#58C0FA",
    fontWeight: "bold",
  },
  imgWrapper: {
    //backgroundColor: "blue",
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  textWrapper: {
    //backgroundColor: "red",
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
});
