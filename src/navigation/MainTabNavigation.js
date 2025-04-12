import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";
import SnacksScreen from "../screens/cate/SnacksScreen";
import SnackDetailScreen from "../screens/cate/SnackDetailScreen";
import AboutScreen from "../screens/about/AboutScreen";
import MyTabBar from "../components/tabbar/MyTabBar";
import MealScreen from "../screens/cate/MealScreen";

const HomeStack = createStackNavigator();

export function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Snacks" component={SnacksScreen} />
      <HomeStack.Screen name="Meal" component={MealScreen} />
      <HomeStack.Screen name="SnackDetail" component={SnackDetailScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function MainTabNavigation() {
  return (
    <Tab.Navigator
      id="tabNavigator"
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="food" component={AboutScreen} />
      <Tab.Screen name="Favorites" component={AboutScreen} />
      <Tab.Screen name="Checklist" component={AboutScreen} />
      <Tab.Screen name="Support" component={AboutScreen} />
    </Tab.Navigator>
  );
}