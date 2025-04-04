import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/home/HomeScreen";

const Drawer = createDrawerNavigator();

const MainDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerPosition: "right", // Chuyển drawer sang bên phải
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#E95322", 
          borderTopLeftRadius:50,
          borderBottomLeftRadius:50,
          
        }
      }}
    >
      <Drawer.Screen name="Home" 
      component={HomeScreen} />
      
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigation;
