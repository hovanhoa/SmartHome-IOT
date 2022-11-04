import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import AppContext from "../AppContext.js";
export default function Features({ navigation }) {
  const myContext = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.text}>Features</Text>
        <SafeAreaView style={styles.buttonsWrapper}>
          <SafeAreaView style={styles.buttons}>
            <SafeAreaView style={styles.button}>
              <TouchableOpacity
                style={styles.inner}
                onPress={() => {
                  navigation.navigate("Climate");
                }}
              >
                <Image
                  style={styles.temp_img}
                  source={require("../assets/temp.png")}
                />
                <Text style={styles.buttonText}>Climate</Text>
              </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.button}>
              <TouchableOpacity
                style={styles.inner}
                onPress={() => {
                  navigation.navigate("Light");
                }}
              >
                <Image
                  style={styles.light_img}
                  source={require("../assets/light.png")}
                />
                <Text style={styles.buttonText}>Light</Text>
              </TouchableOpacity>
            </SafeAreaView>
            <SafeAreaView style={styles.button}>
              <TouchableOpacity
                style={styles.inner}
                onPress={() => {
                  navigation.navigate("Gas");
                }}
              >
                <Image
                  style={styles.flame_img}
                  source={require("../assets/flame.png")}
                />
                <Text style={styles.buttonText}>Gas</Text>
              </TouchableOpacity>
            </SafeAreaView>
            <SafeAreaView style={styles.button}>
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
                  style={styles.security_img}
                  source={require("../assets/security.png")}
                />
                <Text style={styles.buttonText}>Security</Text>
              </TouchableOpacity>
            </SafeAreaView>
            <SafeAreaView style={styles.button}>
              <TouchableOpacity
                style={styles.inner}
                onPress={() => {
                  navigation.navigate("Statistic");
                }}
              >
                <Image
                  style={styles.statistic_img}
                  source={require("../assets/statistic.png")}
                />
                <Text style={styles.buttonText}>Statistic</Text>
              </TouchableOpacity>
            </SafeAreaView>
            <SafeAreaView style={styles.button}>
              <TouchableOpacity
                style={styles.inner}
                onPress={() => {
                  navigation.navigate("Notification");
                }}
              >
                <Image
                  style={styles.notification_img}
                  source={require("../assets/notification.png")}
                />
                <Text style={styles.buttonText}>Notification</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "purple",
    width: "100%",
    height: "63%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "88%",
    height: "94%",
    //backgroundColor: "red",
    justifyContent: "space-between",
  },
  buttonsWrapper: {
    width: "100%",
    height: "92%",
    //backgroundColor: "green",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    width: "94%",
    height: "100%",
    //backgroundColor: "purple",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    //backgroundColor: "red",
    width: "50%",
    height: "33.3%",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    backgroundColor: "#575252",
    width: "90%",
    height: "90%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#FDA43C",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 22,
    color: "#FDA43C",
    fontWeight: "bold",
  },
  temp_img: {
    width: "23%",
    height: "60%",
  },
  light_img: {
    width: "25%",
    height: "60%",
  },
  flame_img: {
    width: "32%",
    height: "60%",
  },
  security_img: {
    width: "32%",
    height: "60%",
  },
  statistic_img: {
    width: "38%",
    height: "52%",
  },
  notification_img: {
    width: "40%",
    height: "58%",
  },
});
