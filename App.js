import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppProvider, AppContext } from "./components/context/AppContext";
import AuthStack from "./components/navigation/AuthStack";
import MainStack from "./components/navigation/MainStack";

function AppNavigator() {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}
