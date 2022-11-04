import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

export default function Footer() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.button}>
        <Image
          style={styles.home_image}
          source={require("./assets/Light_on.png")}
        />
        <Text style={styles.text}>Light alert gas threshold</Text>
    </SafeAreaView>
    <SafeAreaView style={styles.button2}>
        <SafeAreaView style={{ flexDirection: "row" }}>
          <Image
            style={styles.home_image2}
            source={require("./assets/edit.png")}
          />
          <Text style={styles.text}>Adjust gas threshold</Text>
        </SafeAreaView>

        <Image
          style={styles.home_image3}
          source={require("./assets/Rectangle.png")}
        />
        <Image
          style={styles.home_image4}
          source={require("./assets/Rectangle2.png")}
        />
        <SafeAreaView style={{ flexDirection: "row" }}>
          <Text style={styles.text2}>0%</Text>
          <Text style={styles.text3}>100%</Text>
        </SafeAreaView>
        <Text style={styles.text3}>67%</Text>
        <Image
          style={styles.home_image5}
          source={require("./assets/Save.png")}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "green",
    width: "100%",
    height: "16%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: "70px",
    backgroundColor: "#575252",
    width: "80%",
    height: "60%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
    width: "70px",
    height: "70px",
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
    fontSize: 18,
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
