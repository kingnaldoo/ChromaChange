import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/global/styles/theme";
import { useFonts } from "expo-font";
import { Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";
import  { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import Routes from "./src/routes";
import { Context } from "./src/context";
import { StatusBar } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular, Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

	return (
		<Context>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Context>
	);
}
