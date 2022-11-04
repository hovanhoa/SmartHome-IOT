import React, { useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import AppContext from "../AppContext.js";
export default function Title({ navigation }) {
  const myContext = useContext(AppContext);
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.wrapper}>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => {
            if (myContext.door1Alert == 1) {
              navigation.navigate("Alarm");
            } else {
              navigation.navigate("Safe");
            }
          }}
        >
          <Image
            style={styles.back_img}
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
        <SafeAreaView style={styles.title}>
          <Image
            style={styles.setting_img}
            source={require("../assets/setting.png")}
          />
          <Text style={styles.setting_text}>Security Setting</Text>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "green",
    width: "100%",
    height: "10%",
    justifyContent: "center",
  },
  wrapper: {
    //backgroundColor: "blue",
    width: "80%",
    height: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inner: {
    backgroundColor: "#FDA43C",
    width: "16%",
    height: "68%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1000,
  },
  back_img: {
    width: "80%",
    height: "30%",
  },
  setting_img: {
    width: "25%",
    height: "85%",
  },
  setting_text: {
    backgroundColor: "transparent",
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  title: {
    //backgroundColor: "red",
    width: "70%",
    height: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
