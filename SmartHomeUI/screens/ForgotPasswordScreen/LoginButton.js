import * as React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function LoginButton() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.info}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          alert("STAY!");
        }}
      >
        <Image style={styles.img} source={require("./assets/submit.png")} />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    marginBottom: "150px",
    width: "75%",
    height: 52,
    marginLeft: "50px",
    borderRadius: 10,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 20,
    color: "#FDA43C",
  },
  container: {
    marginTop: "40px",
    width: "100%",
    height: "8%",
  },
});