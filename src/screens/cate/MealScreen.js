import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Dimensions,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Header from "../../components/compodent/header";
import foodItems from "../../data/foodItems.json";
import categories from "../../data/categories.json";

const windowWidth = Dimensions.get("window").width;

export default function MealScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { category } = route.params || {};

  const initialMeals = foodItems.filter((item) => item.category === "2");
  const [meals, setMeals] = useState(initialMeals);
  const [sortOption, setSortOption] = useState("Cheap");
  const [modalVisible, setModalVisible] = useState(false);

  const handleCategoryPress = (cat) => {
    // Debug thông tin danh mục
    console.log("Category pressed:", cat);

    // Ánh xạ danh mục dựa trên id
    const categoryMap = {
      "1": "Snacks",
      "2": "Meal",
      "3": "Vegan",
      "4": "Dessert",
      "5": "Drinks",
    };

    const categoryName = categoryMap[cat.id] || "Unknown";
    const normalizedCategory = categoryName.toLowerCase();

    if (["snacks", "meal"].includes(normalizedCategory)) {
      navigation.navigate(normalizedCategory === "snacks" ? "Snacks" : "Meal");
    } else {
      Alert.alert(
        "Chưa hỗ trợ",
        `Danh mục ${categoryName} hiện chưa được hỗ trợ. Vui lòng chọn Snacks hoặc Meal!`,
        [{ text: "OK" }]
      );
    }
  };

  const handleMealPress = (meal) => {
    navigation.navigate("SnackDetail", { snackId: meal.id });
  };

  const handleSortPress = () => {
    setModalVisible(true);
  };

  const handleSortOptionSelect = (option) => {
    setSortOption(option);
    let sortedMeals = [...initialMeals];
    switch (option) {
      case "Cheap":
        sortedMeals.sort((a, b) => a.price - b.price);
        break;
      case "Expensive":
        sortedMeals.sort((a, b) => b.price - b.price);
        break;
      default:
        break;
    }
    setMeals(sortedMeals);
    setModalVisible(false);
  };

  const formatDescription = (description) => {
    return description.replace("topped with", "topped\nwith");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.mainContent}>
        <View style={styles.categoryList}>
          {categories.map((cat) => (
            <View key={cat.id} style={styles.categoryWrapper}>
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => handleCategoryPress(cat)}
              >
                <View style={styles.iconContainer}>
                  <Image
                    source={{ uri: cat.image }}
                    style={styles.categoryIcon}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.sortContainer}>
              <TouchableOpacity style={styles.sortButton}>
                <View style={styles.sortTextContainer}>
                  <Text style={styles.sortTextStatic}>Sort By: </Text>
                  <Text style={styles.sortTextOption}>{sortOption}</Text>
                </View>
                <TouchableOpacity
                  style={styles.sortImageContainer}
                  onPress={handleSortPress}
                >
                  <Image
                    source={{ uri: "https://i.imgur.com/l2REmes.png" }}
                    style={styles.sortImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <TouchableOpacity
                    style={styles.modalOption}
                    onPress={() => handleSortOptionSelect("Cheap")}
                  >
                    <Text style={styles.modalOptionText}>Cheap</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalOption}
                    onPress={() => handleSortOptionSelect("Expensive")}
                  >
                    <Text style={styles.modalOptionText}>Expensive</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.modalCloseText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            {meals.map((meal, index) => (
              <View key={meal.id}>
                <TouchableOpacity
                  style={styles.snackItem}
                  onPress={() => handleMealPress(meal)}
                >
                  <View style={{ overflow: "hidden", borderRadius: 20 }}>
                    <Image
                      source={{ uri: meal.image }}
                      style={styles.snackImage}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.snackInfo}>
                    <View style={styles.snackHeader}>
                      <Text style={styles.snackName}>{meal.name}</Text>
                      <View style={styles.ratingPriceContainer}>
                        <Text style={styles.snackRating}>
                          {meal.rating} ★
                        </Text>
                        <Text style={styles.snackPrice}>
                          ${meal.price.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.snackDescription}>
                      {formatDescription(meal.description)}
                    </Text>
                  </View>
                </TouchableOpacity>
                {index < meals.length - 1 && <View style={styles.divider} />}
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5CB58",
  },
  headerContainer: {
    backgroundColor: "#F5CB58",
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#E95322",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  categoryList: {
    flexDirection: "row",
    marginVertical: 2,
    marginLeft: 10,
    backgroundColor: "#E95322",
    paddingVertical: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  categoryWrapper: {
    borderRadius: 15,
    marginHorizontal: 2,
  },
  categoryItem: {
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 15,
    backgroundColor: "transparent",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryIcon: {
    width: 46,
    height: 60,
  },
  content: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sortContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#FFF",
  },
  sortTextContainer: {
    flexDirection: "row",
    marginRight: 175,
  },
  sortTextStatic: {
    fontSize: 14,
    color: "#070707",
  },
  sortTextOption: {
    fontSize: 14,
    color: "#FF0000",
  },
  sortImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#E95322",
    padding: 5,
  },
  sortImage: {
    width: 16,
    height: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalOption: {
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  modalOptionText: {
    fontSize: 16,
    color: "#070707",
  },
  modalCloseButton: {
    marginTop: 20,
  },
  modalCloseText: {
    fontSize: 16,
    color: "#E95322",
  },
  snackItem: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  snackImage: {
    width: windowWidth - 40,
    height: 180,
    borderRadius: 20,
  },
  snackInfo: {
    padding: 10,
    width: "100%",
  },
  snackHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  snackName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    flex: 1,
  },
  ratingPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  snackRating: {
    fontSize: 14,
    color: "#F4BA1B",
    marginRight: 10,
    borderRadius: 20,
    padding: 2,
    backgroundColor: "#E95322",
  },
  snackPrice: {
    fontSize: 16,
    fontWeight: "400",
    color: "#E95322",
  },
  snackDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "left",
  },
  divider: {
    height: 1,
    backgroundColor: "#FFD8C7",
    marginVertical: 10,
    marginBottom: 40,
    width: "100%",
  },
});