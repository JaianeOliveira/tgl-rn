import styled from "styled-components/native";

import { DefaultScreen } from "global/styles";
import Colors from "global/constants/colors";

export const Screen = styled(DefaultScreen)`
  justify-content: flex-start;
  align-items: center;
`;

export const FirstView = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const PageTitleBold = styled.Text`
  font-family: "Roboto_700Bold_Italic";
  font-size: 24px;
  color: ${Colors.textPrimary};
`;
export const PageTitleLight = styled.Text`
  font-family: "Roboto_300Light_Italic";
  font-size: 24px;
  color: ${Colors.textPrimary};
`;
export const PageTitleContainer = styled.Text`
  flex-direction: row;
  width: 70%;
`;

export const CartButton = styled.TouchableOpacity`
  width: 58px;
  height: 50px;
  background-color: ${Colors.greenSecondary};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.15);
`;

export const Subtitle = styled.Text`
  font-family: "Roboto_700Bold_Italic";
  font-size: 17px;
  color: ${Colors.textPrimary};
`;
export const TextContent = styled.Text`
  color: ${Colors.textPrimary};
  font-family: "Roboto_400Regular_Italic";
  font-size: 17px;
  margin-top: 10px;
`;

export const GameInfoContainer = styled.View`
  align-items: flex-start;
  width: 90%;
`;

export const GameSelectorContainer = styled.View`
  width: 100%;
  margin: 20px 0;
`;

export const NumberTable = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 0;
`;

export const NumberButton = styled.TouchableOpacity<{
  selected: boolean;
  color: string;
}>`
  width: 64px;
  height: 64px;
  background-color: ${(props) =>
    props.selected ? props.color : Colors.numberButtonBackground};
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin: 5px 0;
`;

export const NumberButtonText = styled.Text<{
  selected: boolean;
}>`
  font-family: "Roboto_700Bold_Italic";
  font-size: 20px;
  color: #fff;
`;

export const ActionButtonsContainer = styled.View`
  width: 90%;
  margin: 20px 0;
`;

export const ActionButtonOutline = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${Colors.greenSecondary};
  align-items: center;
  justify-content: center;
  margin: 8px 0;
`;
export const ActionButtonOutlineText = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 20px;
  color: ${Colors.greenSecondary};
`;
export const ActionButton = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${Colors.greenSecondary};
  background-color: ${Colors.greenSecondary};
  align-items: center;
  justify-content: center;
  margin: 8px 0;
`;
export const ActionButtonText = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 20px;
  color: #fff;
`;
