import { View, Text, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";

import {
  PageTitleContainer,
  PageTitleBold,
  PageTitleLight,
  Screen,
  FirstView,
  CartButton,
  Subtitle,
  GameInfoContainer,
  GameSelectorContainer,
  TextContent,
  NumberButton,
  NumberButtonText,
  NumberTable,
  ActionButtonsContainer,
  ActionButton,
  ActionButtonOutline,
  ActionButtonOutlineText,
  ActionButtonText,
} from "./styles";
import { Header, WarningMessage, Cart } from "components";

import { GameSelector, GameSelectorText } from "global/styles";

import Icon from "react-native-vector-icons/Ionicons";

import { useSelector } from "react-redux";
import { RootState } from "global/statesManager";

const NewBet = () => {
  const gameData = useSelector((state: RootState) => state.game);

  const [selectedGame, setSelectedGame] = useState(gameData.types[0]);

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [cartVisible, setCartVisible] = useState(false);

  if (!gameData) {
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
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <FirstView>
          <PageTitleContainer>
            <PageTitleBold>NEW BET </PageTitleBold>
            <PageTitleLight>
              FOR {selectedGame.type.toUpperCase()}
            </PageTitleLight>
          </PageTitleContainer>
          <Cart cartVisible={cartVisible} />
          <CartButton
            style={{ elevation: 3 }}
            onPress={() => setCartVisible(true)}
          >
            <Text>
              <Icon name="cart-outline" size={28} color="#FFF" />
            </Text>
          </CartButton>
        </FirstView>
        <GameInfoContainer>
          <Subtitle>Choose a game</Subtitle>
          <GameSelectorContainer>
            {gameData.types.map((game) => (
              <GameSelector
                color={game.color}
                key={Math.random()}
                includes={selectedGame.id === game.id}
                onPress={() => setSelectedGame(game)}
              >
                <GameSelectorText
                  color={game.color}
                  includes={selectedGame.id === game.id}
                >
                  {game.type}
                </GameSelectorText>
              </GameSelector>
            ))}
          </GameSelectorContainer>
          <Subtitle>Description</Subtitle>
          <TextContent>{selectedGame.description}</TextContent>

          <NumberTable>
            {[...new Array(selectedGame.range)].map((item, index) => (
              <NumberButton
                color={selectedGame.color}
                selected={selectedNumbers.includes(index + 1)}
                onPress={() => {
                  if (selectedNumbers.includes(index + 1)) {
                    setSelectedNumbers(
                      selectedNumbers.filter((number) => number !== index + 1)
                    );
                    console.log(selectedNumbers);

                    return;
                  } else if (
                    !selectedNumbers.includes(index + 1) &&
                    selectedNumbers.length >= selectedGame.max_number
                  ) {
                    WarningMessage("Quantidade máxima atingida");
                  } else {
                    setSelectedNumbers((prevState) => [
                      ...prevState,
                      index + 1,
                    ]);
                    console.log(selectedNumbers);
                  }
                }}
              >
                <NumberButtonText
                  selected={selectedNumbers.includes(index + 1)}
                >
                  {index + 1}
                </NumberButtonText>
              </NumberButton>
            ))}
          </NumberTable>
        </GameInfoContainer>

        <ActionButtonsContainer>
          <ActionButtonOutline onPress={() => setSelectedNumbers([])}>
            <ActionButtonOutlineText>Clear Game</ActionButtonOutlineText>
          </ActionButtonOutline>
          <ActionButtonOutline
            onPress={() => {
              const newArr = [...selectedNumbers];
              while (newArr.length < selectedGame?.max_number) {
                const newNumber =
                  Math.floor(Math.random() * (selectedGame.range - 1)) + 1;
                if (!newArr.includes(newNumber)) {
                  newArr.push(newNumber);
                }
              }
              setSelectedNumbers(newArr);
            }}
          >
            <ActionButtonOutlineText>Complete Game</ActionButtonOutlineText>
          </ActionButtonOutline>
          <ActionButton>
            <ActionButtonText>
              Add to Cart
              <Icon name="cart-outline" size={24} color="#FFF" />
            </ActionButtonText>
          </ActionButton>
        </ActionButtonsContainer>
      </ScrollView>
    </Screen>
  );
};

export default NewBet;
