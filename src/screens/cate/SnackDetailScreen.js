import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import foodItems from "../../data/foodItems.json";
import toppingsData from "../../data/toppings.json";

export default function SnackDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { snackId } = route.params || {};

  const snack = foodItems.find((item) => item.id === snackId);
  const toppings = snack?.toppingIds
    ? toppingsData.filter((topping) => snack.toppingIds.includes(topping.name))
    : [];

  const [quantity, setQuantity] = useState(1);
  const [selectedToppings, setSelectedToppings] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setActiveButton("plus");
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setActiveButton("minus");
    }
  };

  const toggleTopping = (toppingName) => {
    setSelectedToppings((prev) => ({
      ...prev,
      [toppingName]: !prev[toppingName],
    }));
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const calculateTotalPrice = () => {
    let total = snack?.price || 0;
    Object.keys(selectedToppings).forEach((toppingName) => {
      if (selectedToppings[toppingName]) {
        const topping = toppings.find((t) => t.name === toppingName);
        if (topping) total += topping.price;
      }
    });
    return (total * quantity).toFixed(2);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/img/BackArrow.png")}
            style={styles.BackArrowicon}
          />
        </TouchableOpacity>
        <View style={styles.ratingContainer}>
          <Text style={styles.headerTitle}>Chi Tiết</Text>
          <Text style={styles.snackRating}>{snack?.rating || "5.0"} ★</Text>
        </View>
        <TouchableOpacity onPress={toggleLike}>
          <Text style={[styles.heartIcon, isLiked && styles.heartIconLiked]}>♥</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: snack?.image }}
              style={styles.snackImage}
              resizeMode="cover"
            />
          </View>
          <View style={styles.headerSection}>
            <View style={styles.priceQuantityContainer}>
              <Text style={styles.snackPrice}>${calculateTotalPrice()}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={decreaseQuantity}
                  style={[
                    styles.quantityButton,
                    activeButton === "minus" && styles.quantityButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.quantityText,
                      activeButton === "minus"
                        ? styles.quantityTextActive
                        : styles.quantityTextInactive,
                    ]}
                  >
                    -
                  </Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity
                  onPress={increaseQuantity}
                  style={[
                    styles.quantityButton,
                    activeButton === "plus" && styles.quantityButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.quantityText,
                      activeButton === "plus"
                        ? styles.quantityTextActive
                        : styles.quantityTextInactive,
                    ]}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.nameRatingContainer}>
              <Text style={styles.snackName}>{snack?.name || "Tortilla Chips"}</Text>
            </View>
          </View>
          <Text style={styles.description}>
            {snack?.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."}
          </Text>
          <Text style={styles.sectionTitle}>Thêm vào các thành phần</Text>
          {toppings.map((topping, index) => (
            <TouchableOpacity
              key={index}
              style={styles.toppingItem}
              onPress={() => toggleTopping(topping.name)}
            >
              <Text style={styles.toppingName}>{topping.name}</Text>
              <View style={styles.dottedLine}>
                {[...Array(20)].map((_, i) => (
                  <View key={i} style={styles.dot} />
                ))}
              </View>
              <View style={styles.toppingRight}>
                <Text style={styles.toppingPrice}>${topping.price.toFixed(2)}</Text>
                <View
                  style={[
                    styles.toppingCheckbox,
                    selectedToppings[topping.name] && styles.toppingCheckboxSelected,
                  ]}
                >
                  {selectedToppings[topping.name] && (
                    <View style={styles.checkmark} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.addToCartButton}>
            <Image
              source={require("../../assets/img/addcart.png")}
              style={styles.cartIcon}
            />
            <Text style={styles.addToCartText}>Giỏ Hàng</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5CB58",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#F5CB58",
  },
  headerTitle: {
    fontSize: 20,
    color: "#391713",
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
    letterSpacing: 0.5,
  },
  heartIcon: {
    fontSize: 18,
    color: "#FFF",
    backgroundColor: "#FFD5C2",
    borderRadius: 15,
    padding: 5,
    width: 30,
    textAlign: "center",
  },
  heartIconLiked: {
    backgroundColor: "#E95322",
  },
  content: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 20,
    marginBottom: 20,
  },
  snackImage: {
    width: "100%",
    height: 220,
    borderRadius: 15,
  },
  headerSection: {
    marginBottom: 20,
  },
  BackArrowicon: {
    width: 15,
    height: 20,
  },
  priceQuantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  snackPrice: {
    fontSize: 22,
    fontWeight: "700",
    color: "#E95322",
    fontFamily: "Poppins-Bold",
    letterSpacing: 0.5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: "#FFD5C2",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonActive: {
    backgroundColor: "#E95322",
  },
  quantityText: {
    fontSize: 22,
    fontFamily: "Poppins-Medium",
  },
  quantityTextActive: {
    color: "#FFF",
  },
  quantityTextInactive: {
    color: "#E95322",
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 15,
    color: "#391713",
    fontFamily: "Poppins-Medium",
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: "#FFD8C7",
    marginVertical: 10,
  },
  nameRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  snackName: {
    fontSize: 26,
    fontWeight: "600",
    color: "#391713",
    fontFamily: "Poppins-SemiBold",
    letterSpacing: 0.8,
  },
  ratingContainer: {
    paddingLeft: 10,
    paddingRight: 190,
  },
  snackRating: {
    fontSize: 14,
    color: "#FFF",
    backgroundColor: "#E95322",
    borderRadius: 15,
    width: 40,
    padding: 2,
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    letterSpacing: 0.3,
  },
  description: {
    fontSize: 15,
    color: "#666",
    marginBottom: 40,
    fontFamily: "Poppins-Regular",
    lineHeight: 24,
    letterSpacing: 0.3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#E95322",
    marginBottom: 10,
    fontFamily: "Poppins-SemiBold",
    letterSpacing: 0.8,
  },
  toppingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  toppingName: {
    fontSize: 16,
    color: "#391713",
    fontWeight: "400",
    fontFamily: "Poppins-Regular",
    letterSpacing: 0.5,
    flexShrink: 0, // Ngăn chữ xuống hàng
    marginRight: 5, // Khoảng cách nhỏ giữa chữ và đường chấm đứt
  },
  dottedLine: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5, // Khoảng cách giữa chữ và giá
  },
  dot: {
    width: 2,
    height: 2,
    backgroundColor: "#FFD5C2",
    borderRadius: 1,
    marginHorizontal: 2, // Khoảng cách giữa các chấm
    flex: 1, // Đảm bảo các chấm trải đều trên toàn bộ chiều dài
  },
  toppingRight: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 0, // Đảm bảo giá và checkbox không bị co lại
  },
  toppingPrice: {
    fontSize: 16,
    color: "#391713",
    fontWeight: "400",
    fontFamily: "Poppins-Regular",
    letterSpacing: 0.5,
    marginRight: 10,
  },
  toppingCheckbox: {
    width: 14,
    height: 14,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E95322",
    justifyContent: "center",
    alignItems: "center",
  },
  toppingCheckboxSelected: {
    backgroundColor: "#FFF",
  },
  checkmark: {
    width: 7,
    height: 7,
    backgroundColor: "#E95322",
    borderRadius: 6,
  },
  addToCartButton: {
    flexDirection: "row",
    backgroundColor: "#E95322",
    borderRadius: 30,
    paddingVertical: 15,
    marginLeft: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    width: 200,
  },
  cartIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  addToCartText: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    letterSpacing: 0.5,
  },
});