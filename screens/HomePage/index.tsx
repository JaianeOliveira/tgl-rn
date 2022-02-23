import { View, Text } from "react-native";
import React from "react";

import { Screen } from "./styles";

import { useSelector } from "react-redux";
import { RootState } from "global/statesManager";

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
      <Text>HomePage</Text>
      <Text>{userData.user}</Text>
    </Screen>
  );
};

export default HomePage;
