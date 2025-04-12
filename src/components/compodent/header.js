import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
 
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Images from "../../constants/Image"; // Đảm bảo file này tồn tại và đúng tên



export default function header() {
  return (
    <View style={styles.headerTop}>
          <View style={styles.inputtext}>
            <TextInput
              style={styles.input}
              placeholder="Search"
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Image source={Images.Card} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.Noficication} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.People} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
    headerTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop:15,
        marginBottom: 10,
      },
      inputtext: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20,
      },
      input: {
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        padding: 15,
        fontSize: 13,
        marginTop: 20,
        width: 180,
        height: 30,
        marginLeft: 30,
        paddingVertical: 8,
      },
      greetingText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#F8F8F8",
        fontStyle: "League Spartan",
        fontWeight: "800",
      },
      subGreetingText: {
        fontSize: 13,
        color: "#E95322",
        fontStyle: "League Spartan",
      },
      headerIcons: {
        flexDirection: "row",
        gap: 5,
        marginRight: 30,
        marginTop: 15,
      },
      good: {
        marginLeft: 30,
        marginBottom: 20,
      },
      image: {
        width: 30,
        height: 30,
      },
})