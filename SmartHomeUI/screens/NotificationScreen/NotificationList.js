import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import axios from "axios";

export default function NotificationList() {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://smart-home-server-cafecotdua.herokuapp.com/notification/get-all/"
      )
      .then((res) => {
        setNotifications(res.data);
        setLoading(false);
      });
  }, []);

  const notificationCard = (type, content, date, key) => {
    let newDate = new Date(date);
    let hour = newDate.getUTCHours();
    if (hour < 10) {
      hour = "0" + hour;
    }
    let minute = newDate.getUTCMinutes();
    if (minute < 10) {
      minute = "0" + minute;
    }
    let day = newDate.getUTCDate();
    let month = newDate.getUTCMonth() + 1;
    let year = newDate.getUTCFullYear();
    let dateString =
      hour + ":" + minute + "   " + day + "/" + month + "/" + year;
    if (type == "Gas Warning") {
      return (
        <SafeAreaView key={key} style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.head}>
              <SafeAreaView style={styles.warning_tag}>
                <Text style={styles.head_text}>Warning</Text>
              </SafeAreaView>
              <SafeAreaView style={styles.date}>
                <Text style={styles.head_text}>{dateString}</Text>
              </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.body}>
              <Text style={styles.body_text}>{content}</Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView key={key} style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.head}>
              <SafeAreaView style={styles.alert_tag}>
                <Text style={styles.head_text}>Alert</Text>
              </SafeAreaView>
              <SafeAreaView style={styles.date}>
                <Text style={styles.head_text}>{dateString}</Text>
              </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.body}>
              <Text style={styles.body_text}>{content}</Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
      );
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.wrapper}></ScrollView>
      </SafeAreaView>
    );
  }
  if (!isLoading) {
    notifications.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  }

  var notificationCards = [];
  if (!isLoading) {
    for (let i = 0; i < notifications.length; i++) {
      notificationCards.push(
        notificationCard(
          notifications[i].type,
          notifications[i].content,
          notifications[i].date,
          i.toString()
        )
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>{notificationCards}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "red",
    width: "100%",
    height: "66%",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    //backgroundColor: "blue",
    width: "88%",
    height: "66vh",
    //flexDirection: "column",
    //justifyContent: "space-between",
  },
  card: {
    //backgroundColor: "red",
    height: "16.5vh",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    backgroundColor: "#575252",
    width: "90%",
    height: "88%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  head: {
    //backgroundColor: "red",
    width: "95%",
    height: "33%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  head_text: {
    backgroundColor: "transparent",
    fontSize: 17,
    color: "#ffffff",
  },
  warning_tag: {
    backgroundColor: "#FF7A00",
    width: "35%",
    height: "85%",
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  alert_tag: {
    backgroundColor: "#FF0000",
    width: "35%",
    height: "85%",
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    //backgroundColor: "yellow",
    width: "60%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    //backgroundColor: "purple",
    width: "90%",
    height: "67%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body_text: {
    backgroundColor: "transparent",
    fontSize: 14,
    color: "#ffffff",
  },
});
