import { View, Text } from "react-native";
import React from "react";

import { Screen } from "./styles";

import { useSelector } from "react-redux";
import { RootState } from "global/statesManager";

import { Header } from "components";

const HomePage = () => {
  const userData = useSelector((state: RootState) => state.auth);

  if (!userData) {
    return (
      <Screen>
        <Text>Carregando...</Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <Header />

      <Text>HomePage</Text>
      <Text>{userData.user}</Text>
    </Screen>
  );
};

export default HomePage;
