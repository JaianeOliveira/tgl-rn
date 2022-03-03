import { Text, ScrollView, Dimensions, ActivityIndicator } from "react-native";
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

import { Header } from "components";

import { gamesServices, userServices } from "services";
import { getData } from "global/statesManager/gameSlice";
import { setRecentGames } from "global/statesManager/recentGamesSlice";
import { useDispatch } from "react-redux";

const HomePage = ({ navigation }: any) => {
  const gamesData = useSelector((state: RootState) => state.game);
  const userData = useSelector((state: RootState) => state.auth);
  const recentGames = useSelector((state: RootState) => state.recentGames);
  const { listGames } = gamesServices();
  const { myAccount } = userServices();

  const [showFilters, setShowFilters] = useState(false);
  const dispatch = useDispatch();

  const [withFilter, setWithFilter] = useState<number[]>([]);

  const filtered = recentGames.filter((item) =>
    withFilter.includes(item.game_id)
  );
  useEffect(() => {
    listGames().then((response) => dispatch(getData(response)));
  }, []);

  useEffect(() => {
    const updateList = navigation.addListener("focus", () => {
      myAccount(`${userData.token}`).then((response) =>
        dispatch(setRecentGames(response.bets))
      );
    });

    return updateList;
  }, []);

  if (!userData || !gamesData || !recentGames) {
    return (
      <Screen>
        <ActivityIndicator size="large" color={Colors.greenPrimary} />
      </Screen>
    );
  }

  let arrRecentGames = withFilter.length > 0 ? filtered : recentGames;

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
            <GameSelector
              key={Math.random()}
              color={game.color}
              includes={withFilter.includes(game.id)}
              onPress={() => {
                if (withFilter.includes(game.id)) {
                  setWithFilter((prevState) =>
                    prevState.filter((item) => item !== game.id)
                  );
                } else {
                  setWithFilter((prevState) => [...prevState, game.id]);
                }
              }}
            >
              <GameSelectorText
                color={game.color}
                includes={withFilter.includes(game.id)}
              >
                {game.type}
              </GameSelectorText>
            </GameSelector>
          ))}
        </GameSelectorView>
      ) : (
        <></>
      )}

      <ScrollView
        style={{ marginTop: 20, width: Dimensions.get("window").width * 0.9 }}
      >
        {arrRecentGames.length ? (
          arrRecentGames.map((item) => {
            let color = gamesData.types.find(
              (game) => game.id === item.game_id
            )?.color;

            let type = gamesData.types.find(
              (game) => game.id === item.game_id
            )?.type;

            return (
              <Container color={color ? color : "#707070"} key={item.id}>
                <ListNumbers>{item.choosen_numbers}</ListNumbers>
                <Details>
                  {new Date(item.created_at).toLocaleDateString()}
                  {" - "}
                  {formatNumber(item.price)}
                </Details>
                <GameName color={color ? color : "#707070"}>{type}</GameName>
              </Container>
            );
          })
        ) : (
          <Details>Nenhum game recente</Details>
        )}
      </ScrollView>
    </Screen>
  );
};

export default HomePage;
