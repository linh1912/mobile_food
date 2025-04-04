import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Route = {
  HomeScreen: ["HomeScreen"],
  AboutScreen: ["AboutScreen"],
};

export function tabBarVisible(route) {
  const routeName = getFocusedRouteNameFromRoute(route) || ""; // Cung cấp giá trị mặc định là ''

  if (Route[route?.name]) {
    return Route[route?.name].includes(routeName) || !routeName;
  }
  return false;
}
