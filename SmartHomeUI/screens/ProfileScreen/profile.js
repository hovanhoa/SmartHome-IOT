import * as React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.info}>
        <Image style={styles.img} source={require("./assets/profile.jpg")} />
        <Text style={styles.text_name}>Name</Text>
        <Text style={styles.text_email}>email@gmail.com</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 92,
    height: 92,
    borderRadius: 92 / 2,
  },
  text_name: {
    marginTop: "8px",
    backgroundColor: "transparent",
    fontSize: 25,
    color: "#FDA43C",
  },
  text_email: {
    marginTop: "8px",
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#FDA43C",
  },
  container: {
    width: "100%",
    height: "20%",
  },
  info: {
    width: "28%",
    height: "80%",
    marginLeft: "38%",
    marginTop: "8%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
  },
});