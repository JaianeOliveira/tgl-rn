import React from "react";
import AppLoading from "expo-app-loading";

import { ThemeProvider } from "styled-components";

import Colors from "global/constants/colors";

import { AuthRoutes } from "./Routes";
import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

import store from "global/statesManager";
import { Provider as ReduxProvider } from "react-redux";

import Toast from "react-native-toast-message";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ReduxProvider store={store}>
        <ThemeProvider theme={Colors}>
          <AuthRoutes />
          <Toast />
        </ThemeProvider>
        <StatusBar />
      </ReduxProvider>
    );
  }
}
