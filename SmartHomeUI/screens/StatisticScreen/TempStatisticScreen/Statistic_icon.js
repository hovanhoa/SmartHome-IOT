import * as React from "react";
import { StyleSheet, Text, SafeAreaView, Image} from "react-native";

export default function MyHome() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={require("../assets/statistic_icon.png")} />
      <SafeAreaView style={styles.content}>
        <Text style={styles.text}>Statistic</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    img: {
        width: 383,
        height: 254,
      },
  container: {
    //backgroundColor: "grey",
    width: "100%",
    height: "28%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row'
  },
  content: {
    width: "88%",
    height: "94%",
    //backgroundColor: "red",
    justifyContent: "space-between",
  },
  text: {
    marginTop: "-10%",
    marginLeft: "2%",
    backgroundColor: "transparent",
    fontSize: 21,
    color: "#FDA43C",
    fontWeight: "bold",
  },
});
