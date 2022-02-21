import { View, Text } from "react-native";
import React from "react";

import {
  Screen,
  FirstTitle,
  SecondTitle,
  TextHighlight,
  ForTitle,
  LoginButton,
  LoginButtonText,
} from "./styles";

const InitialPage = ({ navigation }: any) => {
  return (
    <Screen>
      <View>
        <FirstTitle>The</FirstTitle>
        <FirstTitle>Greatest</FirstTitle>
        <FirstTitle>App</FirstTitle>
      </View>
      <TextHighlight>
        <ForTitle>for</ForTitle>
      </TextHighlight>
      <SecondTitle>Lottery</SecondTitle>
      <LoginButton
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Login")}
      >
        <LoginButtonText>Login</LoginButtonText>
      </LoginButton>
    </Screen>
  );
};

export default InitialPage;
