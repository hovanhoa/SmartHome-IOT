import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

export default function Title({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <Image
          style={styles.home_image}
          source={require("../assets/climate_icon.png")}
        />
        <Text style={styles.text}>Climate Daily Statistic</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: "5%",
    // paddingBottom: "5%",
    // width: "100%",
    // height: "16%",
    alignItems: "center",
    // marginTop: "10%",
    // marginLeft: "5%",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginTop: "70px",
    backgroundColor: "#575252",
    width: "80%",
    height: "60%",
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
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
