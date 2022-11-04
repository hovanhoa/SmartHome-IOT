import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text
} from "react-native";




export default function Footer({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.img_line} source={require("./assets/Line 1.png")} />
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
        <Text style={styles.text1}>Register</Text> 
        </TouchableOpacity>     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "green",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  img_line: {
    height: 1,
    width: "70%",
    marginBottom: "30px"
  },
  text: {
    marginLeft: "-50px",
    marginBottom: "80px",
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "bold",
  },  
  text1: {
    marginLeft:  "165px",
    marginTop: "-99px",
    fontSize: 14,
    color: "#FDA43C",
    fontWeight: "bold",
  },  
});
