import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";

import { Screen, Title, TextButton, FirstView, FilterButton } from "./styles";

import { useSelector } from "react-redux";
import { RootState } from "global/statesManager";

import Colors from "global/constants/colors";

import { Header } from "components";

const HomePage = () => {
  const userData = useSelector((state: RootState) => state.auth);

  const [showFilters, setShowFilters] = useState(false);

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
      <ScrollView
        style={{
          width: Dimensions.get("window").width,
        }}
        contentContainerStyle={{ paddingHorizontal: 40 }}
      >
        <FirstView>
          <Title>Recent Games</Title>
          <FilterButton onPress={() => setShowFilters(!showFilters)}>
            <Icon
              name={showFilters ? "chevron-up" : "chevron-down"}
              size={20}
              color={Colors.textSecondary}
            />
            <TextButton>Filters</TextButton>
          </FilterButton>
        </FirstView>
      </ScrollView>
    </Screen>
  );
};

export default HomePage;
