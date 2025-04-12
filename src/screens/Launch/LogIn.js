import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert, Linking } from "react-native";
import Images from "../../constants/Image";
import { useNavigation } from "@react-navigation/native";

// Giả lập danh sách người dùng
const users = [
  { email: "phamductung277@gmail.com", password: "linh1912" },
];

export default function LogIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ email và mật khẩu!");
      return;
    }
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      Alert.alert("Thành công", "Đăng nhập thành công!", [
        { text: "OK", onPress: () => navigation.replace("MainTabNavigation") }, // Sửa từ "Home" thành "MainTabNavigation"
      ]);
    } else {
      Alert.alert("Lỗi", "Email hoặc mật khẩu không đúng!");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = async () => {
    const googleUrl = "https://accounts.google.com/signin"; // Sửa URL hợp lệ
    const supported = await Linking.canOpenURL(googleUrl);
    if (supported) {
      await Linking.openURL(googleUrl);
    } else {
      Alert.alert("Lỗi", "Không thể mở liên kết Google!");
    }
  };

  const handleFacebookLogin = async () => {
    const facebookUrl = "https://www.facebook.com/login";
    const supported = await Linking.canOpenURL(facebookUrl);
    if (supported) {
      await Linking.openURL(facebookUrl);
    } else {
      Alert.alert("Lỗi", "Không thể mở liên kết Facebook!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.BackArro} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={styles.contain}>Log In</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text style={styles.label}>Email or Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <Text style={styles.label1}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="********"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <Image source={Images.Showofff} style={styles.image} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgetPassword}>Forget Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.replace("MainTabNavigation")}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>or sign up with</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
            <Image source={Images.Goggleicon} style={styles.image1} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
            <Image source={Images.Facebookicon} style={styles.image1} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={Images.FingerprintIcon} style={styles.image1} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <View style={styles.signUpLink}>
          <Text style={styles.signUpPrompt}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpLinkText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5CB58",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    paddingTop: 40,
    gap: 80,
    paddingBottom: 40,
  },
  image: {
    width: 15,
    height: 15,
  },
  contain: {
    fontSize: 26,
    fontWeight: "900",
    color: "#F8F8F8",
    marginLeft: 20,
    textAlign: "center",
  },
  content: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
    marginTop: 20,
    fontWeight: "700",
  },
  label1: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
    marginTop: 0,
    fontWeight: "700",
  },
  input: {
    backgroundColor: "#F3E9B5",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3E9B5",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  forgetPassword: {
    fontSize: 14,
    color: "#E95322",
    textAlign: "right",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#E95322",
    borderRadius: 25,
    paddingVertical: 15,
    marginLeft: 60,
    alignItems: "center",
    marginVertical: 15,
    width: 200,
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  signUpText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialButton: {
    marginHorizontal: 5,
  },
  image1: {
    width: 40,
    height: 60,
  },
  signUpLink: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signUpPrompt: {
    fontSize: 14,
    color: "#666",
  },
  signUpLinkText: {
    fontSize: 14,
    color: "#E95322",
    fontWeight: "600",
  },
});