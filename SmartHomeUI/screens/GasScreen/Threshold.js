import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
    <Image style={styles.img} source={require("./assets/Gas_on.png")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
      marginTop:"-50%",
    width: 200,
    height: 200,
    margin: "auto",
  },
  container: {
    width: "100%",
    height: "8%",
  },
});