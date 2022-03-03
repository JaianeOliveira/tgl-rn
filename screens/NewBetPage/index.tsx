import { Text, ScrollView, ActivityIndicator } from "react-native";
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
import { Header, WarningMessage, Cart, SuccessMessage } from "components";

import { GameSelector, GameSelectorText } from "global/styles";

import Icon from "react-native-vector-icons/Ionicons";
import Colors from "global/constants/colors";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "global/statesManager";

import { addItem } from "global/statesManager/cartSlice";

const NewBet = ({ navigation }: any) => {
  const gameData = useSelector((state: RootState) => state.game);
  const { cart } = useSelector((state: RootState) => state.cart);
  const [selectedGame, setSelectedGame] = useState(gameData.types[0]);
  const dispatch = useDispatch();

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [cartItems, setCartItems] = useState();
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = () => {
    if (selectedNumbers.length < selectedGame.max_number) {
      let faltam = selectedGame.max_number - selectedNumbers.length;
      WarningMessage(
        `Complete seu jogo. Ainda ${
          faltam === 1 ? "falta" : "faltam"
        } ${faltam} ${faltam === 1 ? "número" : "números"}.`
      );
    } else if (
      selectedNumbers.length === selectedGame.max_number &&
      cart.some(
        (cartItem) =>
          cartItem.bet.every((item) => selectedNumbers.includes(item)) &&
          cartItem.gameName === selectedGame.type
      )
    ) {
      WarningMessage("Você já fez essa aposta");
    } else if (
      selectedNumbers.length === selectedGame.max_number &&
      !cart.some(
        (cartItem) =>
          cartItem.bet.every((item) => selectedNumbers.includes(item)) &&
          cartItem.gameName === selectedGame.type
      )
    ) {
      dispatch(
        addItem({
          id: new Date().getTime(),
          game_id: selectedGame.id,
          gameName: selectedGame.type,
          price: selectedGame.price,
          color: selectedGame.color,
          bet: selectedNumbers.sort((a, b) => a - b),
        })
      );
      setSelectedNumbers([]);
      SuccessMessage("Seu jogo foi adicionado ao carrinho");
    }
  };

  if (!gameData) {
    return (
      <Screen>
        <ActivityIndicator size="large" color={Colors.greenPrimary} />
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
          <Cart
            cartVisible={cartVisible}
            setCartVisible={setCartVisible}
            navigation={navigation.navigate}
          />
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
                key={Math.random()}
                color={game.color}
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
                key={index + 1}
                color={selectedGame.color}
                selected={selectedNumbers.includes(index + 1)}
                onPress={() => {
                  if (selectedNumbers.includes(index + 1)) {
                    setSelectedNumbers(
                      selectedNumbers.filter((number) => number !== index + 1)
                    );
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
          <ActionButton onPress={addToCart}>
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
