import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert, // Thêm Alert để hiển thị thông báo
} from "react-native";
import Images from "../../constants/Image";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  // Hàm xử lý khi nhấn vào danh mục
  const handleCategoryPress = (categoryName) => {
    navigation.navigate(categoryName); // Điều hướng đến màn hình có tên là categoryName
  };

  // Hàm hiển thị thông báo khi danh mục chưa được hỗ trợ
  const handleUnsupportedCategory = (categoryName) => {
    Alert.alert(
      "Chưa hỗ trợ",
      `Danh mục ${categoryName} hiện chưa được hỗ trợ. Vui lòng chọn Snacks hoặc Meal!`,
      [{ text: "OK" }]
    );
  };

  // Hàm mở Drawer
  const openDrawer = () => {
    navigation.getParent("drawer")?.openDrawer();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.containerHome}>
        {/* Search Bar and Icons */}
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
            <TouchableOpacity onPress={openDrawer}>
              <Image source={Images.Noficication} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.People} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.good}>
          <Text style={styles.greetingText}>Good Morning</Text>
          <Text style={styles.subGreetingText}>Rise and Shine! It's Breakfast Time</Text>
        </View>

        {/* Categories */}
        <View style={styles.content}>
          <View style={styles.categoryList}>
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => handleCategoryPress("Snacks")}
            >
              <Image source={Images.SnacksIcon} style={styles.categoryIcon} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => handleCategoryPress("Meal")}
            >
              <Image source={Images.MealIcon} style={styles.categoryIcon} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => handleUnsupportedCategory("Vegan")} // Thêm thông báo
            >
              <Image source={Images.VeganIcon} style={styles.categoryIcon} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => handleUnsupportedCategory("Dessert")} // Thêm thông báo
            >
              <Image source={Images.DessertIcon} style={styles.categoryIcon} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => handleUnsupportedCategory("Drinks")} // Thêm thông báo
            >
              <Image source={Images.DrinksIcon} style={styles.categoryIcon} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#FFD5C2",
              shadowColor: "#FFD5C2",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
              marginHorizontal: 15,
              marginRight: 40,
              marginVertical: 20,
            }}
          />

          {/* Best Seller */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Best Seller</Text>
            <TouchableOpacity style={styles.skipContainer}>
              <Text style={styles.viewAllText}>View All</Text>
              <Image
                source={Images.Nexticon}
                style={{ width: 14, height: 14, resizeMode: "contain", marginLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bestSellerList}>
            <View style={styles.bestSellerItem}>
              <Image source={Images.SushiImage} style={styles.bestSellerImage} resizeMode="cover" />
              <Text style={styles.bestSellerPrice}>$103.0</Text>
            </View>
            <View style={styles.bestSellerItem}>
              <Image source={Images.PastaImage} style={styles.bestSellerImage} resizeMode="cover" />
              <Text style={styles.bestSellerPrice}>$50.0</Text>
            </View>
            <View style={styles.bestSellerItem}>
              <Image source={Images.Vege} style={styles.bestSellerImage} resizeMode="cover" />
              <Text style={styles.bestSellerPrice}>$12.99</Text>
            </View>
            <View style={styles.bestSellerItem}>
              <Image source={Images.CakeImage} style={styles.bestSellerImage} resizeMode="cover" />
              <Text style={styles.bestSellerPrice}>$8.20</Text>
            </View>
          </View>

          {/* Banner */}
          <View style={styles.banner}>
            <View style={styles.bannerImageContainer}>
              <Image
                source={Images.PizzaImage}
                style={styles.bannerImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerText}>Experience our{"\n"}delicious new dish</Text>
              <Text style={styles.discountText}>30% OFF</Text>
            </View>
          </View>

          {/* Page Indicator */}
          <View style={styles.indicatorContainer}>
            <View style={styles.inactiveIndicator} />
            <View style={styles.inactiveIndicator} />
            <View style={styles.activeIndicator} />
            <View style={styles.inactiveIndicator} />
            <View style={styles.inactiveIndicator} />
          </View>

          {/* Recommend */}
          <Text style={[styles.sectionTitle, { marginLeft: 6, marginTop: 20, fontSize: 18 }]}>
            Recommend
          </Text>
          <View style={styles.recommendList}>
            <View style={styles.recommendItem}>
              <Image source={Images.BurgerImage} style={styles.recommendImage} resizeMode="cover" />
              <View style={styles.likesContainer}>
                <Image source={Images.HeartIcon} style={styles.heartIcon} resizeMode="contain" />
              </View>
            </View>
            <View style={styles.recommendItem}>
              <Image
                source={Images.SpringRollsImage}
                style={styles.recommendImage}
                resizeMode="cover"
              />
              <View style={styles.likesContainer}>
                <Image source={Images.HeartIcon} style={styles.heartIcon} resizeMode="contain" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  containerHome: {
    flex: 1,
    backgroundColor: "#F5CB58",
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingLeft: 20,
    paddingTop: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  categoryList: {
    flexDirection: "row",
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 7,
  },
  categoryIcon: {
    width: 60,
    height: 60,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom:10,
  },
  viewAllText: {
    fontSize: 13,
    color: "#E95322",
    fontWeight: "500",
  },
  skipContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25,
  },
  bestSellerList: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  bestSellerItem: {
    alignItems: "center",
    marginRight: 7,
    borderRadius: 10,
    overflow: "hidden",
  },
  bestSellerImage: {
    width: 72,
    height: 100,
    borderRadius: 25,
  },
  bestSellerPrice: {
    position: "absolute",
    bottom: 10,
    right: 0,
    backgroundColor: "#E95322",
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  banner: {
    borderRadius: 10,
    height: 150,
    width: "90%",
    marginLeft: 8,
  },
  bannerImageContainer: {
    width: "100%",
    height: "100%",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  bannerTextContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    padding: 15,
    justifyContent: "center",
  },
  bannerText: {
    fontSize: 14,
    color: "white",
    paddingBottom: 10,
  },
  discountText: {
    fontSize: 30,
    fontWeight: "700",
    color: "#F8F8F8",
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 90,
    marginTop: 10,
  },
  activeIndicator: {
    width: 20,
    height: 5,
    backgroundColor: "#E65100",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  inactiveIndicator: {
    width: 20,
    height: 5,
    backgroundColor: "#FFD180",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  recommendList: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  recommendItem: {
    marginRight: 15,
    backgroundColor: "#FFF",
    borderRadius: 15,
    overflow: "hidden",
  },
  recommendImage: {
    width: 150,
    height: 100,
  },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 2,
  },
  heartIcon: {
    width: 16,
    height: 16,
  },
});