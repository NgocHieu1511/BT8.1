import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { AppContext } from "../context/AppContext";

export default function SignIn() {
  const { setIsLoggedIn, setEmail, setPassword } = useContext(AppContext);

  const [email, setLocalEmail] = useState("");
  const [password, setLocalPassword] = useState("");

  const handleLogin = () => {
    setEmail(email);
    setPassword(password);
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Enter email"
        style={styles.input}
        value={email}
        onChangeText={setLocalEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setLocalPassword}
      />

      <View style={styles.button}>
        <Button title="Sign In" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 35,
    color: "#333",
  },

  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 6,
    color: "#444",
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    backgroundColor: "#fff",
    fontSize: 15,
  },

  button: {
    marginTop: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
});
