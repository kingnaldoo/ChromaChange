import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";
import  { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import Routes from "./src/routes";
import { Context } from "./src/context";
import { theme } from "./src/global/styles/theme";

SplashScreen.preventAutoHideAsync()
  .then(result => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn);

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  setTimeout(async () => {
    await SplashScreen.hideAsync();
  }, 2000);

	return (
		<Context>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Context>
	);
}
