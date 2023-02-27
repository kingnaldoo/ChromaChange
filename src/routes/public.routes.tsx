import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens";

const Stack = createStackNavigator();

export function PublicRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
