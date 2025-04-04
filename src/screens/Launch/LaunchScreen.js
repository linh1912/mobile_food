import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../constants/Image";
import { useNavigation } from "@react-navigation/native"; 

export default function LaunchScreen() {
  const navigation = useNavigation(); // Khởi tạo navigation

  return (
    <View style={styles.container}>
      <Image source={Images.Launch} style={styles.snackImage} />
      <Text style={styles.contain}>
        Lorem ipsum dolor sit amet, consectetur{"\n"} adipiscing elit, sed do eiusmod
      </Text>
      
      {/* Nút Log In */}
      <TouchableOpacity style={styles.nextButton1} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.nextText1}>Log In</Text>
      </TouchableOpacity>

      {/* Nút Sign Up */}
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.nextText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E95322",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  snackImage: {
    width: 180,
    height: 230,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  contain: {
    fontSize: 14,
    paddingVertical: 40,
    textAlign: "center",
    color: "#F8F8F8",
  },
  nextButton1: {
    backgroundColor: "#F5CB58",
    paddingVertical: 11,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 7,
    width: 200,
  },
  nextButton: {
    backgroundColor: "#F3E9B5",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 6,
    width: 200,
  },
  nextText1: {
    color: "#E95322",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  nextText: {
    color: "#E95322",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
});
