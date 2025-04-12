import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabNavigation from "./MainTabNavigation";

const Drawer = createDrawerNavigator();

const MainDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      id="drawer" // Thêm id để getParent tìm đúng navigator
      initialRouteName="Home"
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#E95322",
          borderTopLeftRadius: 50,
          borderBottomLeftRadius: 50,
        },
      }}
    >
      <Drawer.Screen name="Home" component={MainTabNavigation} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigation;