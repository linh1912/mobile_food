import React from "react";
import { StyleSheet,TextInput, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from "react-native";
import Images from "../../constants/Image";
import { useNavigation } from "@react-navigation/native"; 

export default function HomeScreen() {
    const navigation = useNavigation();
  return (
    
    <ScrollView style={styles.containerHome}>
    {/* <SafeAreaView style={styles.container}> */}
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
            
            <TouchableOpacity >
            <Image source={Images.Card} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image source={Images.Noficication} style={styles.image} resizeMode="contain" />
              </TouchableOpacity>
            <TouchableOpacity >
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
        <TouchableOpacity style={styles.categoryItem}>
          <Image source={Images.SnacksIcon} style={styles.categoryIcon} resizeMode="contain" />
         
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Image source={Images.MealIcon} style={styles.categoryIcon} resizeMode="contain" />
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Image source={Images.VeganIcon} style={styles.categoryIcon} resizeMode="contain" />
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Image source={Images.DessertIcon} style={styles.categoryIcon} resizeMode="contain" />
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Image source={Images.DrinksIcon} style={styles.categoryIcon} resizeMode="contain" />
         
        </TouchableOpacity>
      </View>
      <View style={{ height: 1,backgroundColor: '#FFD5C2',shadowColor: '#FFD5C2',shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.5,shadowRadius: 2,  marginHorizontal:15,marginRight:40,marginVertical: 20}} />

      {/* Best Seller */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best Seller</Text>
        <TouchableOpacity style={styles.skipContainer} >
          <Text style={styles.viewAllText}>View All</Text>
          <Image source={Images.Nexticon} style={{width: 14,height: 14,resizeMode: "contain",marginLeft: 5, }} />
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

      {/* Banner*/}
      <View style={styles.banner}>
  <Image source={Images.PizzaImage} style={styles.bannerImage} resizeMode="cover" />
  <View style={styles.bannerTextContainer}>
    <Text style={styles.bannerText}>   Experience our{"\n"}delicious new dish</Text>
    
    <Text style={styles.discountText}>30% OFF</Text>
  </View>
</View>
      {/* duong kẻ */}
        <View style={styles.indicatorContainer}>
            <View style={styles.inactiveIndicator} />          
            <View style={styles.inactiveIndicator} />
            <View style={styles.activeIndicator} />
            <View style={styles.inactiveIndicator} />
            <View style={styles.inactiveIndicator} />
       </View>

      {/* Recommend  */}
      <Text style={[styles.sectionTitle, { marginLeft: 6, marginTop: 20 ,fontSize:18}]}>Recommend</Text>
      <View style={styles.recommendList}>
        <View style={styles.recommendItem}>
          <Image source={Images.BurgerImage} style={styles.recommendImage} resizeMode="cover" />
          
          <View style={styles.likesContainer}>
            <Image source={Images.HeartIcon} style={styles.heartIcon} resizeMode="contain" />
            
          </View>
        </View>
        <View style={styles.recommendItem}>
          <Image source={Images.SpringRollsImage} style={styles.recommendImage} resizeMode="cover" />
          
          <View style={styles.likesContainer}>
            <Image source={Images.HeartIcon} style={styles.heartIcon} resizeMode="contain" />
            
          </View>
        </View>
      </View>
      </View>
    {/* </SafeAreaView> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: "#F5CB58", // Màu nền vàng nhạt
  },
  container:{
    flex:1
  },
  content:{
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
    header: {
      padding: 20,
    },
    inputtext:{
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
      marginTop:10,
      marginBottom: 20,
    
      
    },

    input:{

      backgroundColor: "#FFFFFF",
      borderRadius: 30,
      padding: 15,
      fontSize: 13,
      marginTop: 20,
      width:180,
      height:30,
      marginLeft:30,
      paddingVertical: 8,
    },
    image1:{
    width: 15,
    height: 15,
  },
  searchIconContainer: {
    
    position: "absolute", // Đặt vị trí tuyệt đối để "đè" lên TextInput
    right: 10, // Đặt biểu tượng ở phía bên phải
    borderRadius: 70,
    backgroundColor:"#E95322",
    width:25,
    height:20,
    paddingTop:4,
    alignItems:"center",
    paddingBottom:20,
  },
    greetingText: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#F8F8F8",
      fontStyle:"League Spartan",
      fontWeight:"800",
    },
    subGreetingText: {
      fontSize: 13,
      color: "#E95322",
      
      fontStyle:"League Spartan",
    
    },

  headerIcons: {
    flexDirection: "row",
    gap: 5,
    marginRight: 30,
    marginTop:15,
  },
  
  good: {
    marginLeft: 30,
    marginBottom:20,
  },
  
 
  
  icon: {
    width: 25,
    height: 24,
  },

  image:{
    width: 30,
    height: 30,
  },
  // badge: {
  //   position: "absolute",
  //   top: -5,
  //   right: -5,
  //   backgroundColor: "#E95322",
  //   borderRadius: 10,
  //   width: 20,
  //   height: 20,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // badgeText: {
  //   color: "#FFF",
  //   fontSize: 12,
  // },
  categoryList: {
    flexDirection: "row", //phan bo theo dang dong
   
    
  },
  categoryItem: {
    alignItems: "center",
    marginRight:7,
    
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
  },
  viewAllText: {
    fontSize: 13,
    color: "#E95322",
    fontWeight: "500",
  },
  bestSellerList: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  skipContainer: {
    flexDirection: "row", // Xếp chữ và icon theo chiều ngang
    alignItems: "center", // Căn giữa theo chiều dọc
    marginRight:25,
  },
  bestSellerItem: {
    
    alignItems: "center",
    marginRight:7,
    borderRadius: 10,
    overflow: "hidden",
  },
  bestSellerImage: {
    width: 72,
    height: 100,
    borderRadius:25,
  },
  bestSellerPrice: {
    position: "absolute", // Đặt vị trí tuyệt đối để đè lên ảnh
    bottom: 10,  // Cách đáy ảnh 10px
    right: 0, // Căn về mép phai
    backgroundColor: "#E95322", // Màu nền đỏ cam
    color: "#FFFFFF", // Màu chữ trắng
    fontSize: 8,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 5, // Khoảng cách trên/dưới
    paddingHorizontal: 5, // Khoảng cách trái/phải
    borderTopLeftRadius: 10, // Bo góc trên phải
    borderBottomLeftRadius: 10, // Bo góc dưới phải
  },
  
  banner: {
    borderRadius: 10,
    height: 150,
    position: "relative",
    overflow: "hidden",
    marginHorizontal: 10,
    marginRight:35,
   
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  bannerTextContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    marginTop:20,
    
    // justifyContent: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.3)", // Nền mờ để văn bản dễ đọc
  },
  bannerText: {
    fontSize: 13,
    color: "white", // Sửa từ "#red" thành "white" để hiển thị đúng
    paddingBottom:20,
    
  },
  discountText: {
    fontSize: 30,
    fontWeight: 800,
    color: "#F8F8F8",
    
   
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems:"center",
    marginLeft:90,
    marginTop:10,


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
    marginBottom:20,
    
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
  recommendPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    padding: 5,
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
