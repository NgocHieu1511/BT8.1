import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AppContext } from "../context/AppContext";

export default function Profile() {
  const { setIsLoggedIn, email, password } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>

      <View style={styles.card}>
        <Text style={styles.info}>Email:{email}</Text>
        <Text style={styles.info}>Mật khẩu:{password}</Text>
      </View>

      <View style={styles.button}>
        <Button title="Sign Out" onPress={() => setIsLoggedIn(false)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    elevation: 3,
  },

  info: {
    fontSize: 16,
    marginBottom: 10,
  },

  button: {
    marginTop: 10,
  },
});
