import React, { useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { AppContext } from "../context/AppContext";

export default function SignIn({ navigation }) {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Enter email" style={styles.input} />

      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter password"
        secureTextEntry
        style={styles.input}
      />

      <View style={styles.button}>
        <Button title="Sign In" onPress={() => setIsLoggedIn(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },

  button: {
    marginTop: 10,
  },
});
