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
      <SafeAreaView style={styles.info}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image style={styles.img} source={require("./assets/undo.png")} />
        </TouchableOpacity>
        <Text style={styles.text}>Bio-data</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 38,
    height: 38,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 20,
    color: "#FDA43C",
    fontFamily: "Roboto",
    marginLeft: "25%",
  },
  container: {
    width: "100%",
    height: "8%",
  },
  info: {
    width: "100%",
    height: "80%",
    marginLeft: "8%",
    marginTop: "2%",
    flexDirection: "row",
    alignItems: "center",
  },
});
