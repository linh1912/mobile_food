import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert("Error", "Vui lòng điền đẩy đủ thông tintin");
      return;
    }
    Alert.alert("Success", "Câu trả lời của bạn đã được gửi!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.title}>Contact Us</Text>
      
      {/* Mô tả */}
      <Text style={styles.description}>
        Have a question? Feel free to reach out to us!
      </Text>

      {/* Form nhập thông tin */}
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Your Message"
        placeholderTextColor="#888"
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />

      {/* Nút gửi tin nhắn */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>

      {/* Thông tin liên hệ */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>📍 Our Office</Text>
        <Text style={styles.infoText}>123 Food Street, New York, USA</Text>
        
        <Text style={styles.infoTitle}>📞 Phone</Text>
        <Text style={styles.infoText}>+1 234 567 890</Text>

        <Text style={styles.infoTitle}>📧 Email</Text>
        <Text style={styles.infoText}>support@foodieapp.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#E95322",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#DDD",
    shadowColor: "#E95322",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  messageInput: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#E95322",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    shadowColor: "#E95322",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoContainer: {
    marginTop: 30,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFF3E0",
    padding: 15,
    borderRadius: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E95322",
    marginTop: 10,
  },
  infoText: {
    fontSize: 14,
    color: "#444",
  },
});
