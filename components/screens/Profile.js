import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AppContext } from "../context/AppContext";

export default function Profile() {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <View style={{ padding: 20 }}>
      <Text>Profile Screen</Text>

      <Button title="Sign Out" onPress={() => setIsLoggedIn(false)} />
    </View>
  );
}
