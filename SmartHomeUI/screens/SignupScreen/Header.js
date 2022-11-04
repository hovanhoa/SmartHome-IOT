import * as React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Header({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Image style={styles.img} source={require("./assets/backicon.png")} />
      </TouchableOpacity>
      <Text style={styles.text}>Register</Text>
      <Text style={styles.text1}>
        Create an&nbsp;
        <Text style={{ color: "#FDA43C" }}>account</Text>&nbsp;
        <Text style={{ color: "#FFFFFF" }}>to access all the features of</Text>
        &nbsp;
        <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
          Smart Home!
        </Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 38,
    height: 38,
    borderRadius: 52 / 2,
    marginLeft: "30px",
    marginTop: "60px",
  },
  text: {
    backgroundColor: "transparent",
    marginTop: "30px",
    marginLeft: "30px",
    color: "#FDA43C",
    fontSize: 15,
    fontWeight: "bold",
  },
  text1: {
    backgroundColor: "transparent",
    marginTop: "15px",
    marginLeft: "30px",
    color: "#FFFFFF",
    fontSize: 17,
    paddingRight: "100px",
  },
  container: {
    //backgroundColor: "blue",
    width: "100%",
    height: "8%",
  },
  info: {
    width: "28%",
    height: "80%",
    marginLeft: "65%",
    marginTop: "2%",
    flexDirection: "row",
    //backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
  },
});
