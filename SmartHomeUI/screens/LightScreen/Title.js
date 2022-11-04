import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Title({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.wrapper}>
        <SafeAreaView style={styles.title}>
          <Image
            style={styles.img}
            source={require("./assets/light-bulb.png")}
          />
          <Text style={styles.light_text}>Light</Text>
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
  img: {
    width: "35%",
    height: "100%",
  },
  light_text: {
    backgroundColor: "transparent",
    fontSize: 25,
    color: "#FDA43C",
    marginLeft: "80px",
    marginTop: "-80px",
    fontWeight: "bold",
  },
  title: {
    //backgroundColor: "red",
    width: "70%",
    height: "80%",
    marginLeft: "10px",
    marginTop: "-40px",
    justifyContent: "space-between",
  },
});
