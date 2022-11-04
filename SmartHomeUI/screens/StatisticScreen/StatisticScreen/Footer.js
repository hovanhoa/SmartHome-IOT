import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Footer({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Image
          style={styles.home_image}
          source={require("../assets/home.png")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "green",
    marginTop: "170px",
    width: "100%",
    height: "16%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#FDA43C",
    width: "24%",
    height: "60%",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  home_image: {
    width: "58%",
    height: "70%",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 22,
    color: "#FDA43C",
    fontWeight: "bold",
  },
});
