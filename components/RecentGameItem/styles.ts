import styled from "styled-components/native";
import Colors from "global/constants/colors";

export const Container = styled.View<{ color: string }>`
  /* border-left: 6px solid ${(props) => props.color}; */
  padding: 5px 15px;
  margin-bottom: 25px;
  border-radius: 5px;
`;

export const ListNumbers = styled.Text`
  color: ${Colors.textPrimary};
  font-family: "Roboto_700Bold_Italic";
  font-size: 20px;
`;

export const Details = styled.Text`
  font-family: "Roboto_400Regular_Italic";
  color: ${Colors.textSecondary};
`;

export const GameName = styled.Text<{ color: string }>`
  font-family: "Roboto_700Bold_Italic";
  color: ${(props) => props.color};
  font-size: 20px;
`;
