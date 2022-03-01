import { View, Text } from "react-native";
import React from "react";

import { Container, Details, ListNumbers, GameName } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "global/statesManager";

type Props = {
  choosen_numbers: string;
  created_at: string;
  game_id: number;
  id: number;
  price: number;
  type: {
    id: number;
    type: string;
  };
  user_id: number;
};
const RecentGameItem = (props: Props) => {
  const gameData = useSelector((state: RootState) => state.game);
  return (
    <Container
      color={
        gameData.types.find((item) => item.id === props.game_id)?.color ||
        "#707070"
      }
    >
      <ListNumbers>{props.choosen_numbers}</ListNumbers>
      <Details>
        {new Date(props.created_at).toLocaleString()} {" - "}
        {props.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </Details>
      <GameName
        color={
          gameData.types.find((item) => item.id === props.game_id)?.color ||
          "#707070"
        }
      >
        {props.type.type}
      </GameName>
    </Container>
  );
};

export default RecentGameItem;
