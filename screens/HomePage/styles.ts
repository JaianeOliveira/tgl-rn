import styled from "styled-components/native";

import { DefaultScreen } from "global/styles";
import Colors from "global/constants/colors";

export const Screen = styled(DefaultScreen)`
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: "Roboto_700Bold_Italic";
  color: ${Colors.textPrimary};
  font-size: 24px;
`;

export const FirstView = styled.View`
  flex-direction: row;
  width: 90%;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 40px;
`;

export const TextButton = styled.Text`
  font-family: "Roboto_400Regular_Italic";
  color: ${Colors.textSecondary};
  font-size: 17px;
`;

export const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const GameSelectorView = styled.View`
  margin-top: 20px;
  width: 90%;
`;

export const RecentGamesview = styled.View``;

export const Container = styled.View<{ color: string }>`
  padding: 5px 15px;
  margin-bottom: 25px;
  border-radius: 5px;
  border-left-width: 6px;
  border-left-color: ${(props) => props.color};
`;

export const ListNumbers = styled.Text`
  color: ${Colors.textPrimary};
  font-family: "Roboto_700Bold_Italic";
  font-size: 20px;
`;

export const Details = styled.Text`
  font-family: "Roboto_400Regular_Italic";
  color: ${Colors.textSecondary};
  font-size: 17px;
`;

export const GameName = styled.Text<{ color: string }>`
  font-family: "Roboto_700Bold_Italic";
  color: ${(props) => props.color};
  font-size: 20px;
`;
