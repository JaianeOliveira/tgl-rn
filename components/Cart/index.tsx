import { View, Text, Modal, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import {
  Backdrop,
  CartContainer,
  Title,
  LightTitle,
  TotalContainer,
  SaveButton,
  SaveButtonText,
  ContentArea,
  TopView,
  NormalText,
} from "./styles";

import SuccessMessage from "../SuccessMessage";
import ErrorMessage from "../ErrorMessage";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "global/statesManager";
import { clearCart } from "global/statesManager/cartSlice";

import formatNumber from "global/utils/formatNumber";

import Icon from "react-native-vector-icons/Ionicons";
import Colors from "global/constants/colors";

import CartItem from "../CartItem";

import { betsServices } from "services";

const Cart = (props: {
  cartVisible: boolean;
  setCartVisible: (newState: boolean) => any;
  navigation: any;
}) => {
  const { total, cart } = useSelector((state: RootState) => state.cart);
  const userData = useSelector((state: RootState) => state.auth);
  const { min_cart_value } = useSelector((state: RootState) => state.game);
  const { newBet } = betsServices();

  const betsData: { game_id: number; numbers: number[] }[] = [];
  const dispatch = useDispatch();

  const save = () => {
    if (!min_cart_value || !userData.token) return;

    if (total < min_cart_value) {
      props.setCartVisible(false);
      ErrorMessage(
        "O valor mínimo para salvar sua aposta é R$ " +
          formatNumber(min_cart_value)
      );
      return;
    }
    cart.map(({ bet, game_id }) =>
      betsData.push({
        game_id: game_id,
        numbers: bet,
      })
    );

    newBet(betsData, userData.token)
      .then((response) => {
        if (response === 200) {
          dispatch(clearCart());
          SuccessMessage("Aposta salva!");
          props.setCartVisible(false);
          props.navigation("Home");
        } else {
          ErrorMessage("Ops, algo deu errado");
        }
      })
      .catch((error) => ErrorMessage(error.response.data.message));
  };

  return (
    <Modal
      animationType="slide"
      visible={props.cartVisible}
      transparent={true}
      onRequestClose={() => props.setCartVisible(false)}
    >
      <Backdrop>
        <CartContainer>
          <ContentArea>
            <TopView>
              <Title>Cart</Title>
              <TouchableOpacity onPress={() => props.setCartVisible(false)}>
                <Text>
                  <Icon name="ios-close" size={30} color="#707070" />
                </Text>
              </TouchableOpacity>
            </TopView>
            {cart.length > 0 ? (
              <ScrollView contentContainerStyle={{ minHeight: "40%" }}>
                {cart.map((gameItem) => (
                  <CartItem key={gameItem.id} {...gameItem} />
                ))}
              </ScrollView>
            ) : (
              <NormalText>O carrinho está vazio</NormalText>
            )}

            <TotalContainer>
              <Title>Cart </Title>
              <LightTitle>Total </LightTitle>
              <LightTitle>R$ {formatNumber(total)}</LightTitle>
            </TotalContainer>
          </ContentArea>
          <SaveButton onPress={save}>
            <SaveButtonText>Save</SaveButtonText>
            <Text
              style={{
                marginLeft: 5,
              }}
            >
              <Icon
                name="arrow-forward"
                color={Colors.greenSecondary}
                size={30}
              />
            </Text>
          </SaveButton>
        </CartContainer>
      </Backdrop>
    </Modal>
  );
};

export default Cart;
