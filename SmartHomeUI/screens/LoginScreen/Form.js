import * as React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";

export default function Form() {
  return (
    <SafeAreaView style={styles.container}>

        {/* <Text style={styles.text_title}>First name</Text>
        <Text style={styles.text_content}>What's your first name?</Text>

        <Text style={styles.text_title}>Last name</Text>
        <Text style={styles.text_content}>What's your last name?</Text> */}

        <Text style={styles.text_title}>Email</Text>
        <Text style={styles.text_content_phone}>
            <Image style={styles.img_email} source={require("./assets/email.png")} />
            <Image style={styles.img_line} source={require("./assets/line.png")} />
            <Text style={{marginLeft: "10px", position: "relative", top: "-10px"}}>Email</Text>
        </Text>

        <Text style={styles.text_title}>Your Password</Text>
        <Text style={styles.text_content_phone}>
            <Image style={styles.img_password} source={require("./assets/pass.png")} />
            <Image style={styles.img_line} source={require("./assets/line.png")} />
            <Text style={{marginLeft: "10px", position: "relative", top: "-10px"}}>Password</Text>
        </Text>

        {/* <Text style={styles.text_title}>Birthday</Text>
        <Text style={styles.text_content_phone}>
            <Text style={{marginLeft: "60px", position: "relative", top: "-10px", marginRight: "30px"}}>What's your date of birth?</Text>
            <Image style={styles.img_down} source={require("./assets/calendar.png")} />
        </Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img_password: {
    marginLeft: "-200px",
    marginRight: "5px",
    marginBottom: "3px",
    width: 25,
    height: 25,
  },
  img_email: {
    marginLeft: "-230px",
    marginRight: "5px",
    marginBottom: "3px",
    width: 25,
    height: 25,
  },
  img_line: {
    height: 40,
    width: 3,
    marginBottom: "-5px"
  },
  img_down: {
    height: 38,
    width: 38,
  },
  text_title: {
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Roboto",
    marginLeft: "8%",
    marginBottom: "5px",
    marginTop: "15px"
  },
  text_content: {
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#C8C8C8",
    // fontFamily: "Roboto",
    textAlign: 'center',
    marginLeft: "8%",
    justifyContent: "center",
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FDA43C",
    marginRight: "8%",
    marginBottom: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  text_content_phone: {
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#C8C8C8",
    // fontFamily: "Roboto",
    textAlign: 'center',
    marginLeft: "8%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderColor: "#FDA43C",
    borderRadius: 10,
    borderWidth: 1,
    marginRight: "8%",
    marginBottom: "10px",

  },
  container: {
    marginTop: "20px",
    width: "100%",
    height: "12%",
  },
});
