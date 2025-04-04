import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../constants/Image";
import { useNavigation } from '@react-navigation/native';

export default function OnboardingB() {
  const navigation = useNavigation();

  const handleNavigateToHome = () => {
    navigation.navigate("LaunchScreen"); // Nút Skip đi đến Home
  };

  const handleNavigateToNext = () => {
    navigation.navigate("OnBoardingC"); // Nút Next đi đến OnBoardingC
  };

  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <Image 
          source={Images.Rectangle138} 
          style={styles.snackImage} 
        />
      </View>
      <TouchableOpacity style={styles.skipButton} onPress={handleNavigateToHome}>
        <View style={styles.skipContainer}>
          <Text style={styles.skipText}>Skip </Text>
          <Image source={Images.Nexticon} style={styles.skipIcon} />
        </View>
      </TouchableOpacity>
      <View style={styles.card}>
        <Image source={Images.Card1} style={styles.Onbicon} />
        <Text style={styles.title}>Easy Payment</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, conse ctetur {"\n"} adipiscing elit, sed do eiusmod tempor {"\n"} incididunt ut labore et dolore magna.
        </Text>
        <View style={styles.indicatorContainer}>
          <View style={styles.inactiveIndicator} />
          <View style={styles.activeIndicator} />
          <View style={styles.inactiveIndicator} />
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={handleNavigateToNext}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEC654", // Thêm background cho container chính
  },
  contain: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black", // Đảm bảo nền đen
  },
  snackImage: {
    width: "100%", // Full chiều rộng
    height: "100%", // Full chiều cao
    resizeMode: "cover", // Hoặc "contain" tùy ý
  },
  skipContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  skipButton: {
    position: "absolute",
    top: 30,
    right: 20,
  },
  skipIcon: {
    width: 14,
    height: 18,
    resizeMode: "contain",
    marginLeft: 5,
  },
  skipText: {
    color: "#E65100",
    fontSize: 17,
    fontWeight: "600",
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 25,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "40%",
  },
  Onbicon: {
    marginTop: 30,
    width: 40,
    height: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "Inter",
    color: "#E65100",
    marginVertical: 10,
    marginBottom: 8,
  },
  description: {
    textAlign: "center",
    color: "black",
    paddingHorizontal: 10,
    fontSize: 12,
    fontWeight: "bold",
    paddingVertical: 10,
    fontStyle: "League Spartan",
  },
  indicatorContainer: {
    flexDirection: "row",
    marginVertical: 15,
    paddingVertical: 10,
  },
  activeIndicator: {
    width: 35,
    height: 5,
    backgroundColor: "#E65100",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  inactiveIndicator: {
    width: 35,
    height: 5,
    backgroundColor: "#FFD180",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  nextButton: {
    backgroundColor: "#E65100",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 7,
  },
  nextText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});