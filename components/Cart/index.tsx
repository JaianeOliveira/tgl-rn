import { View, Text, Modal } from "react-native";
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
} from "./styles";

const Cart = (props: {
  cartVisible: boolean;
  setCartVisible: (newState: boolean) => any;
}) => {
  return (
    <Modal
      animationType="slide"
      visible={props.cartVisible}
      transparent={true}
      onRequestClose={() => props.setCartVisible(false)}
    >
      <Backdrop onPress={() => props.setCartVisible(false)}>
        <CartContainer>
          <ContentArea>
            <Title>Cart</Title>
            <View></View>
            <TotalContainer>
              <Title>Cart </Title>
              <LightTitle>Total </LightTitle>
              <LightTitle>R$ 0,00</LightTitle>
            </TotalContainer>
          </ContentArea>
          <SaveButton>
            <SaveButtonText>Save</SaveButtonText>
          </SaveButton>
        </CartContainer>
      </Backdrop>
    </Modal>
  );
};

export default Cart;
