// import { SvgXml } from "react-native-svg";
import {
  icon_Home,
  icon_HomeFocus,
} from "../../assets/svg/iconTabNavigation/icon_Home";

export default function TabbarIcon(props) {
  switch (props.name) {
    case "HomeScreen":
      return (
        <SvgXml
          key={props.name}
          xml={props.focused ? icon_HomeFocus : icon_Home}
        />
      );
    case "AboutScreen":
      return (
        <SvgXml
          key={props.name}
          xml={props.focused ? icon_HomeFocus : icon_Home}
        />
      );
    default:
      return <></>;
  }
}
