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
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Image style={styles.img} source={require("./assets/backicon.png")} />
      </TouchableOpacity>
      <Text style={styles.text}>Forgot Password?</Text>
      <Text style={styles.text1}>
        Recover you password if you have forgot the password!
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
