import * as React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  
} from "react-native";



export default function ForgotPassword({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("ForgotPassword");
          }}
        >
        <Text style={styles.text}>Forgot Password?</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  text: {
    backgroundColor: "transparent",
    fontSize: 14,
    // fontFamily: "Roboto",
    // textAlign: 'center',
    marginLeft: "8%",
    // alignItems: "center",
    justifyContent: "center",
    // marginRight: "8%",
    // marginBottom: "10px",
    color: "#FDA43C",
  },
  container: {
    //backgroundColor: "blue",\
    marginTop: "90px",
    width: "100%",
    height: "20%",
  },
});
