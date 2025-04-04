import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainDrawerNavigation from "./MainDrawerNavigation"; // Import MainDrawerNavigation
import AboutScreen from "../screens/about/AboutScreen"; // Đảm bảo đường dẫn đúng
import MyTabBar from "../components/tabbar/MyTabBar"; // Đảm bảo đường dẫn đúng

const Tab = createBottomTabNavigator();

export default function MainTabNavigation() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainDrawerNavigation} // Sử dụng MainDrawerNavigation thay vì HomeScreen
      />
      <Tab.Screen name="Meal" component={AboutScreen} />
      <Tab.Screen name="Favorites" component={AboutScreen} />
      <Tab.Screen name="Checklist" component={AboutScreen} />
      <Tab.Screen
        name="Support"
        component={AboutScreen} // Thay bằng screen phù hợp
      />
    </Tab.Navigator>
  );
}
