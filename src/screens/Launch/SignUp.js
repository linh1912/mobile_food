import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Images from "../../constants/Image";
import { useNavigation } from "@react-navigation/native";

// Mảng lưu trữ người dùng (sẽ được sử dụng chung với LogIn)
export const users = [
  { email: "phamductung277@gmail.com", password: "linh1912" },
];

export default function SignUp() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    if (!fullName || !email || !password || !mobileNumber || !dateOfBirth) {
      Alert.alert("Lỗi", "Vui lòng điền đầy đủ tất cả các trường!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Lỗi", "Email không hợp lệ!");
      return;
    }

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      Alert.alert("Lỗi", "Email này đã được đăng ký!");
      return;
    }

    const mobileRegex = /^0\d{9}$/;
    if (!mobileRegex.test(mobileNumber)) {
      Alert.alert("Lỗi", "Số điện thoại phải gồm 10 số và bắt đầu bằng 0!");
      return;
    }

    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const dateMatch = dateOfBirth.match(dateRegex);
    if (!dateMatch) {
      Alert.alert("Lỗi", "Ngày sinh phải có định dạng dd/mm/yyyy!");
      return;
    }

    const [day, month, year] = dateMatch.slice(1).map(Number);
    const isValidDate = (d, m, y) => {
      const date = new Date(y, m - 1, d);
      return (
        date.getDate() === d &&
        date.getMonth() === m - 1 &&
        date.getFullYear() === y
      );
    };

    if (!isValidDate(day, month, year)) {
      Alert.alert("Lỗi", "Ngày sinh không hợp lệ!");
      return;
    }

    const newUser = { email, password };
    users.push(newUser);

    Alert.alert("Thành công", "Đăng ký thành công!", [
      { text: "OK", onPress: () => navigation.replace("MainTabNavigation") }, // Sửa từ "Main" thành "MainTabNavigation"
    ]);
  }; // Sửa lỗi cú pháp thiếu dấu "}"

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={Images.BackArro} style={styles.image2} resizeMode="contain" />
            </TouchableOpacity>
            <Text style={styles.headerText}>New Account</Text>
          </View>

          <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              placeholderTextColor="#999"
              value={fullName}
              onChangeText={setFullName}
            />

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="********"
                placeholderTextColor="#999"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={toggleShowPassword}>
                <Image source={Images.Showofff} style={styles.image} resizeMode="contain" />
              </TouchableOpacity>
            </View>

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="example@example.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="0123456789"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              value={mobileNumber}
              onChangeText={setMobileNumber}
              maxLength={10}
            />

            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              placeholder="DD/MM/YYYY" // Sửa placeholder cho đúng định dạng
              placeholderTextColor="#999"
              keyboardType="numeric"
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
              maxLength={10}
            />

            <Text style={styles.termsText}>
              By continuing, you agree to {"\n"}
              <Text style={styles.linkText}>Terms of Use</Text> and{" "}
              <Text style={styles.linkText}>Privacy Policy</Text>.
            </Text>

            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.signUpText}>or sign up with</Text>
            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={Images.Goggleicon} style={styles.image1} resizeMode="contain" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={Images.Facebookicon} style={styles.image1} resizeMode="contain" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={Images.FingerprintIcon} style={styles.image1} resizeMode="contain" />
              </TouchableOpacity>
            </View>

            <View style={styles.logInLink}>
              <Text style={styles.logInPrompt}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}> {/* Sửa thành "Login" */}
                <Text style={styles.logInLinkText}>Log In</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5CB58",
  },
  inner: {
    flex: 1,
  },
  image2: {
    width: 15,
    height: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    paddingTop: 40,
    gap: 50,
    paddingBottom: 40,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "900",
    color: "#F8F8F8",
    textAlign: "center",
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  label: {
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
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  termsText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginVertical: 10,
  },
  linkText: {
    color: "#E95322",
    fontWeight: "600",
  },
  signUpButton: {
    backgroundColor: "#E95322",
    borderRadius: 25,
    paddingVertical: 15,
    marginLeft: 60,
    alignItems: "center",
    marginVertical: 15,
    width: 200,
  },
  signUpButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  signUpText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginVertical: 10,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialButton: {
    marginHorizontal: 5,
  },
  logInLink: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  logInPrompt: {
    fontSize: 14,
    color: "#666",
  },
  logInLinkText: {
    fontSize: 14,
    color: "#E95322",
    fontWeight: "600",
  },
  image: {
    width: 24,
    height: 24,
  },
  image1: {
    width: 40,
    height: 60,
  },
});