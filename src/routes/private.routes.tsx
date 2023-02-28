import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home } from "../screens";

const Stack = createStackNavigator();

export function PrivateRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
