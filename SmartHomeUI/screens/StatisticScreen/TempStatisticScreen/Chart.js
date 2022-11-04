import * as React from "react";
import { StyleSheet, Text, SafeAreaView, Image} from "react-native";

export default function Chart() {
  return (
    <SafeAreaView  style={styles.container} >
      <Image style={styles.img} source={require("../assets/Chart.png")} />
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
    marginTop: "30%",
    // width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
