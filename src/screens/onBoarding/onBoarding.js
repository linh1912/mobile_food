import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import Images from "../../constants/Image";
import { useNavigation } from '@react-navigation/native';

const OnBoarding = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("LaunchScreen"); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <Image 
          source={Images.Rectangle} 
          style={styles.image} 
        />
      </View>
      <TouchableOpacity style={styles.skipButton} onPress={handleNavigate}>
        <View style={styles.skipContainer}>
          <Text style={styles.skipText}>Skip </Text>
          <Image source={Images.Nexticon} style={styles.skipIcon} />
        </View>
      </TouchableOpacity>

      <View style={styles.card}>
        <Image source={Images.Onbicon} style={styles.Onbicon} resizeMode="contain" /> 
        <Text style={styles.title}>Order For Food</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, conse ctetur {"\n"} adipiscing elit, sed do eiusmod tempor {"\n"} incididunt ut labore et dolore magna.
        </Text>
        <View style={styles.indicatorContainer}>
          <View style={styles.activeIndicator} />
          <View style={styles.inactiveIndicator} />
          <View style={styles.inactiveIndicator} />
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("OnboardingB")}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEC654",
  },
  contain: {
    backgroundColor: "black",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 250,
    alignSelf: "center",
    transform: [{ scale: 3 }],
  },
  skipContainer: {

    // width: 100,
    height: 100,
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
    fontSize: 16,
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
    width: 90,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "Inter",
    color: "#E65100",
    marginVertical: 10,
    marginBottom: 6,
  },
  description: {
    textAlign: "center",
    color: "black",
    paddingHorizontal: 10,
    fontSize: 12,
    fontWeight: "bold",
    paddingVertical: 5,
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

export default OnBoarding;