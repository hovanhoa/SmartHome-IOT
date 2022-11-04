import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

export default function Choice({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.button}>
        {/* <SafeAreaView style={styles.button}> */}
        <Text style={styles.text}>Tháng: 03/2022</Text>
        <Text style={styles.text}>Số lần báo động: 1</Text>
        {/* </SafeAreaView> */}
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "5%",
    paddingBottom: "5%",
    width: "100%",
    height: "16%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: "70px",
    backgroundColor: "#575252",
    width: "80%",
    height: "100%",
    borderRadius: 15,
    // alignItems: "center",
    justifyContent: "center",
    paddingLeft: "10%",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "white"
  },
  button2: {
    marginTop: "50px",
    backgroundColor: "#575252",
    width: "80%",
    height: "120%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  home_image: {
    marginRight: "10px",
    width: "46px",
    height: "46px",
  },
  home_image2: {
    marginLeft: "-35px",
    marginRight: "10px",
    width: "40px",
    height: "40px",
  },
  home_image3: {
    marginRight: "10px",
    marginTop: "15px",
    marginLeft: "10px",
    width: "240px",
    height: "7px",
  },
  home_image4: {
    marginRight: "-10px",
    marginTop: "-7px",
    marginLeft: "20px",
    width: "50px",
    height: "7px",
  },
  home_image5: {
    marginRight: "30px",
    marginTop: "-7px",
    marginLeft: "200px",
    width: "75px",
    height: "47px",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 14,
    color: "#FDA43C",
    fontWeight: "bold",
    flexDirection: "row",
    marginTop: "5%"
  },
  text2: {
    backgroundColor: "transparent",
    fontSize: 11,
    color: "#FDA43C",
    fontWeight: "bold",
    flexDirection: "row",
    marginRight: "220px",
  },
  text3: {
    backgroundColor: "transparent",
    fontSize: 11,
    color: "#FDA43C",
    fontWeight: "bold",
    flexDirection: "row",
  },
});
