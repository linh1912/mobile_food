import React, { useEffect } from "react";
import { View, Text, StyleSheet ,Image,SafeAreaView,StatusBar} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Images from "../../constants/Image";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("OnBoarding"); // Chuyển sang màn hình chính
    }, 2000); // 2 giây

    return () => clearTimeout(timer); // Cleanup timer khi unmount
  }, []);

  return (
    <>
    <StatusBar hidden={true}/>
    <SafeAreaView style={styles.container}>
      
      <Image source={Images.Yumquick} style={{width: 140, height: 180}} />
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEC654",
  },
 
});
