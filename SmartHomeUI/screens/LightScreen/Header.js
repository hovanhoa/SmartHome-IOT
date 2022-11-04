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
            navigation.navigate("Profile");
          }}
        >
          <Image style={styles.img} source={require("./assets/profile.jpg")} />
        </TouchableOpacity>
        <Text style={styles.text}>Hehe</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 20,
    color: "#FDA43C",
  },
  container: {
    //backgroundColor: "blue",
    width: "100%",
    height: "8%",
  },
  info: {
    width: 110,
    height: 54,
    marginLeft: "65%",
    marginTop: "2%",
    flexDirection: "row",
    //backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
  },
});
