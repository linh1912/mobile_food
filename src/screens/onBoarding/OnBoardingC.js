import { StyleSheet, Text, View,Image,SafeAreaView,StatusBar,TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../constants/Image";
import { useNavigation } from '@react-navigation/native';


export default function OnBoardingC() {
  const navigation = useNavigation(); // 👉 Lấy navigation để điều hướng
    const handleNavigate = () => {
    navigation.navigate("LaunchScreen"); // Chuyển sang Onboardingc
      };
  return (
    <View style={styles.container}>
        <View style={styles.contain}>
             <Image source={Images.Rectangle128} style={styles.snackImage}  /> 
             
        </View>
        
        <View style={styles.card}>
          
         {/* Icon */}
            <Image source={Images.Delivery} style={styles.Onbicon}   resizeMode="contain"/> 
            <Text style={styles.title}>Easy Payment</Text>
            <Text style={styles.description}>
                 Lorem ipsum dolor sit amet, conse ctetur {"\n"} adipiscing elit, sed do eiusmod tempor {"\n"}incididunt ut labore et dolore magna.
            </Text>
            <View style={styles.indicatorContainer}>
              
               <View style={styles.inactiveIndicator} />
              
               <View style={styles.inactiveIndicator} />
               <View style={styles.activeIndicator} />
            </View>
            <TouchableOpacity style={styles.nextButton}  onPress={handleNavigate} >
                <Text style={styles.nextText}>Get Started</Text>
            </TouchableOpacity>

          
          
         </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#FEC654",
   },
   contain:{
    
    flex:1,
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
   
   },
   
  snackImage:{
   width: 200, // Kích thước gốc
  height: 250,
  alignSelf: "center",
  transform: [{ scale: 3.9 }], //kich thuoc phong to so voi binh thuong 
    
  
   

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
  Onbicon:{
    marginTop:20,
    width: 70,
    height: 45,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle:"Inter",
    color: "#E65100",
    marginVertical: 10,
    marginBottom:6,
  },
  description: {
    textAlign: "center",
    color: "black",
    paddingHorizontal: 10,
    fontSize: 12,
    fontWeight: "bold",
    paddingVertical: 10,
    fontStyle:"League Spartan",
  },
  indicatorContainer: {
    flexDirection: "row",
    marginVertical: 15,
    paddingVertical: 10

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
    marginTop:7,
  },
  nextText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

})