import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

export default function SSButton({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.wrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Setting");
          }}
        >
          <Image
            style={styles.setting_img}
            source={require("../assets/setting.png")}
          />
          <Text style={styles.buttonText}>Security Setting</Text>
          <Image
            style={styles.foward_img}
            source={require("../assets/foward.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "blue",
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    backgroundColor: "#575252",
    width: "80%",
    height: "40%",
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    //backgroundColor: "purple",
    height: "80%",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  setting_img: {
    height: "90%",
    width: "18%",
  },
  foward_img: {
    height: "80%",
    width: "16%",
  },
  buttonText: {
    backgroundColor: "transparent",
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
});
