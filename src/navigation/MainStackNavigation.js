import React from "react";
import { SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from "../screens/about/AboutScreen";
import MainDrawerNavigation from "./MainDrawerNavigation";
import SplashScreen from "../screens/splash/SplashScreen";
import OnBoarding from "../screens/onBoarding/onBoarding";
import OnboardingB from "../screens/onBoarding/onboardingb";
import OnBoardingC from "../screens/onBoarding/OnBoardingC";
import LaunchScreen from "../screens/Launch/LaunchScreen";
import LogIn from "../screens/Launch/LogIn";
import SignUp from "../screens/Launch/SignUp";
import SnackDetailScreen from "../screens/cate/SnackDetailScreen"; // Thêm SnackDetailScreen

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
          component={LogIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabNavigation"
          component={MainDrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SnackDetail"
          component={SnackDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}