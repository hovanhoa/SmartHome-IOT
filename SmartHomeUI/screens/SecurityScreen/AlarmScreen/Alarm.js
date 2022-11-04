import React, { useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import AppContext from "../AppContext.js";
export default function Alarm({ navigation }) {
  const myContext = useContext(AppContext);
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.imgWrapper}>
        <Image style={styles.img} source={require("../assets/warning.png")} />
      </SafeAreaView>
      <SafeAreaView style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Safe");
            myContext.SetDoor1Alert(0);
          }}
        >
          <Text style={styles.buttonText}>Remove Alarm</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "red",
    width: "100%",
    height: "46%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "52%",
    height: "88%",
  },
  buttonText: {
    backgroundColor: "transparent",
    fontSize: 25,
    color: "#ffffff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#F64242",
    width: "65%",
    height: "55%",
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  imgWrapper: {
    //backgroundColor: "blue",
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    //backgroundColor: "red",
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
});
