import { View, Text, ScrollView } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/Ionicons";

import {
  CartItemContainer,
  ContentArea,
  LineText,
  Title,
  TotalText,
  TrashButton,
} from "./sytles";

import formatNumber from "global/utils/formatNumber";

import { useDispatch } from "react-redux";
import { removeItem } from "global/statesManager/cartSlice";

const CartItem = (props: {
  id: number;
  game_id: number;
  gameName: string;
  price: number;
  color: string;
  bet: number[];
}) => {
  const dispatch = useDispatch();
  return (
    <CartItemContainer>
      <TrashButton onPress={() => dispatch(removeItem(props))}>
        <Text>
          <Icon name="md-trash-outline" size={28} color="#707070" />
        </Text>
      </TrashButton>
      <ContentArea color={props.color}>
        <Title>{props.bet.toString()}</Title>
        <LineText>
          <Title color={props.color}>{props.gameName} </Title>
          <TotalText>R$ {formatNumber(props.price)}</TotalText>
        </LineText>
      </ContentArea>
    </CartItemContainer>
  );
};

export default CartItem;
