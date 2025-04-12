// import { SafeAreaView, StyleSheet } from "react-native";
// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { HomeScreen } from "../screens/home";
// import AboutScreen from "../screens/about/AboutScreen";
// import MainTabNavigation from "./MainTabNavigation";
// import SplashScreen from "../screens/splash/SplashScreen";
// import OnBoarding from "../screens/onBoarding/onBoarding";
// import OnboardingB from "../screens/onBoarding/onboardingb";
// import OnBoardingC from "../screens/onBoarding/OnBoardingC";
// import LaunchScreen from "../screens/Launch/LaunchScreen";
// import LogIn from "../screens/Launch/LogIn"; // Imported as LogIn
// import SignUp from "../screens/Launch/SignUp"; // Imported as SignUp

// export default function MainStackNavigation() {
//   const Stack = createStackNavigator();
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Stack.Navigator initialRouteName="SplashScreen">
//         <Stack.Screen
//           name="SplashScreen"
//           component={SplashScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="OnBoarding"
//           component={OnBoarding}
//           options={{ headerShown: false }}
//         />
        
//         <Stack.Screen
//           name="OnboardingB"
//           component={OnboardingB}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="OnBoardingC"
//           component={OnBoardingC}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="LaunchScreen"
//           component={LaunchScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Login"
//           component={LogIn} 
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="SignUp"
//           component={SignUp} 
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="MainTabNavigation"
//           component={MainTabNavigation}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Profile"
//           component={AboutScreen}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </SafeAreaView>
//   );
// }
import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home";
import AboutScreen from "../screens/about/AboutScreen";
import MainTabNavigation from "./MainTabNavigation";
import SplashScreen from "../screens/splash/SplashScreen";
import OnBoarding from "../screens/onBoarding/onBoarding";
import OnboardingB from "../screens/onBoarding/onboardingb";
import OnBoardingC from "../screens/onBoarding/OnBoardingC";
import LaunchScreen from "../screens/Launch/LaunchScreen";
import LogIn from "../screens/Launch/LogIn"; // Imported as LogIn
import SignUp from "../screens/Launch/SignUp"; // Imported as SignUp
import { StatusBar } from "expo-status-bar"; // Import StatusBar from expo-status-bar

export default function MainStackNavigation() {
  const Stack = createStackNavigator();
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        // barStyle="light-content" // hoặc "light-content" tùy màu nền bạn
      />
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="OnboardingB"
          component={OnboardingB}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoardingC"
          component={OnBoardingC}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LaunchScreen"
          component={LaunchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LogIn} // Use the imported LogIn component
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp} // Use the imported SignUp component
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabNavigation"
          component={MainTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={AboutScreen}
          options={{ headerShown: false }}
        />   
      </Stack.Navigator>
    </>
  );
}