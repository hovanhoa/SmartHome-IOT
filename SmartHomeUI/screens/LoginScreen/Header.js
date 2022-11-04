import * as React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Animated
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

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


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);


export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("./assets/header1.png")} resizeMode="cover" style={styles.img}>
        <Text style={styles.text1}>SMART</Text>
        <Text style={styles.text2}>HOME</Text>
      </ImageBackground>
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center"
    // borderRadius: 52 / 2,
  },
  text1: {
    marginLeft: "5%",
    marginTop: "60%",    
    backgroundColor: "transparent",
    fontSize: 35,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: "-10px"
  },
  text2: {
    marginLeft: "5%", 
    backgroundColor: "transparent",
    fontSize: 70,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  container: {
    //backgroundColor: "blue",
    width: "100%",
    height: "50%",
  },
  info: {
    width: "28%",
    height: "80%",
    marginLeft: "65%",
    marginTop: "2%",
    flexDirection: "row",
    //backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position:'absolute',

  },
});
