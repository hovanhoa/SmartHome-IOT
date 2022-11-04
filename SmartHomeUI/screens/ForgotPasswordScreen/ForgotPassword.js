import * as React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  
} from "react-native";

// export default function Header() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <SafeAreaView style={styles.info}>
//         <TouchableOpacity
//           onPress={() => {
//             alert("Go to user information screen!");
//           }}
//         >
//           <Image style={styles.img} source={require("./assets/quan.png")} />
//         </TouchableOpacity>
//         <Text style={styles.text}>Quân</Text>
//       </SafeAreaView>
//     </SafeAreaView>
//   );
// }


export default function ForgotPassword() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Forgot Password?</Text>
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
