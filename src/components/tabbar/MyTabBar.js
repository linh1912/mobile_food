import React, { useEffect } from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Images from "../../constants/Image";

const { width } = Dimensions.get("screen");

function MyTabBar({ state, descriptors, navigation }) {
    const insets = useSafeAreaInsets();
    const tabWidth = width / state.routes.length;

    const translateX = useSharedValue(0);

    useEffect(() => {
        translateX.value = withTiming(state.index * tabWidth, { duration: 300 });
    }, [state.index]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const getIconSource = (name, isFocused) => {
        switch (name) {
            case "Home":
                return Images.Vectoricon;
            case "Meal":
                return Images.Noi;
            case "Favorites":
                return Images.Heart1;
            case "Checklist":
                return Images.Note;
            case "Support":
                return Images.Listen;
            default:
                return null;
        }
    };

    return (
        // tap bar
        <View style={[styles.containerMytabBar, { paddingBottom: insets.bottom }]}> 
            
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        activeOpacity={1}
                        style={styles.btnNavigationTab}
                    >
                        <View style={styles.box_iconMytabBar}>
                            <Image
                                source={getIconSource(route.name, isFocused)}
                                style={[
                                    styles.icon,
                                    { tintColor: isFocused ? "#FFF" : "#FFD5C2" },
                                ]}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default MyTabBar;

const styles = StyleSheet.create({
    containerMytabBar: {
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        backgroundColor: "#E95322",
        borderRadius: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        gap: 5, // Thêm gap để giảm khoảng cách giữa các tab
        paddingHorizontal: 10,
        
    },
    btnNavigationTab: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginLeft:0,
        
    },
    indicator: {
        position: "absolute",
        top: 0,
        height: 3,
        backgroundColor: "#FFF",
    },
    box_iconMytabBar: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        
    },
    icon: {
        width: 30,
        height: 30,
    },
});
