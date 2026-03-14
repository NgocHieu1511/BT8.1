import React, { useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AppContext } from "../context/AppContext";

export default function SignIn({ navigation }) {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput placeholder="Enter email" />

      <Text>Password</Text>
      <TextInput placeholder="Enter password" secureTextEntry />

      <Button title="Sign In" onPress={() => setIsLoggedIn(true)} />

      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
}
