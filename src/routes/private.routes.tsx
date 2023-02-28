import { createStackNavigator } from "@react-navigation/stack";
import React, { useCallback } from "react";
import { initialState, useAuth } from "../context";
import { theme } from "../global/styles/theme";
import { Home } from "../screens";
import { signOut } from "../services";
import { removeStorage } from "../utils";
import { LogoutButton, LogoutText } from "./styles";

const Stack = createStackNavigator();

function Logout() {
  const { auth, setUser } = useAuth();

  const handleLogout = useCallback(async () => {
    await signOut(auth).then(() => {
      removeStorage("user").then(() => {
        setUser(initialState);
      })
    }
    ).catch((error) => {
      console.log(error);
    }
    );
  }, [signOut, initialState])

  return (
    <LogoutButton onPress={handleLogout}>
      <LogoutText>Sair</LogoutText>
    </LogoutButton>
  )
}

export function PrivateRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
          elevation: 0,
        },
        headerTintColor: theme.colors.textWhite,
        headerTitleAlign: "center",
        headerRight: () => Logout()
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
