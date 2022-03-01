import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React, { useState, useEffect } from "react";

import {
  Screen,
  Title,
  TextButton,
  FirstView,
  FilterButton,
  GameSelectorView,
  RecentGamesview,
  Container,
  Details,
  GameName,
  ListNumbers,
} from "./styles";
import { GameSelector, GameSelectorText } from "global/styles";

import { useSelector } from "react-redux";
import { RootState } from "global/statesManager";

import Colors from "global/constants/colors";
import { formatNumber } from "global/utils";

import { Header, RecentGameItem } from "components";

import { gamesServices, userServices } from "services";
import { getData } from "global/statesManager/gameSlice";
import { setRecentGames } from "global/statesManager/recentGamesSlice";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const gamesData = useSelector((state: RootState) => state.game);
  const userData = useSelector((state: RootState) => state.auth);
  const recentGames = useSelector((state: RootState) => state.recentGames);

  const { listGames } = gamesServices();
  const { myAccount } = userServices();
  const [showFilters, setShowFilters] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    listGames().then((response) => dispatch(getData(response)));
  }, []);

  useEffect(() => {
    myAccount(`${userData.token}`).then((response) =>
      dispatch(setRecentGames(response.bets))
    );
  }, []);

  if (!userData || !gamesData || !recentGames) {
    return (
      <Screen>
        <Text>Carregando...</Text>
      </Screen>
    );
  }

  const getColor = (gameId: number) => {
    let color = gamesData.types.find((game) => game.id === gameId)?.color;
    return color ? color : "#707070";
  };

  return (
    <Screen>
      <Header />

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
      {showFilters ? (
        <GameSelectorView>
          {gamesData.types.map((game) => (
            <GameSelector color={game.color}>
              <GameSelectorText color={game.color}>
                {game.type}
              </GameSelectorText>
            </GameSelector>
          ))}
        </GameSelectorView>
      ) : (
        <></>
      )}

      <ScrollView style={{ marginTop: 20 }}>
        {recentGames.map((item) => {
          let color = gamesData.types.find(
            (game) => game.id === item.game_id
          )?.color;

          let type = gamesData.types.find(
            (game) => game.id === item.game_id
          )?.type;

          return (
            <Container color={color ? color : "#707070"}>
              <ListNumbers>{item.choosen_numbers}</ListNumbers>
              <Details>
                {new Date(item.created_at).toLocaleDateString()}
                {" - "}
                {formatNumber(item.price)}
              </Details>
              <GameName color={color ? color : "#707070"}>{type}</GameName>
            </Container>
          );
        })}
      </ScrollView>
    </Screen>
  );
};

export default HomePage;
