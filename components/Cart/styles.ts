import styled from "styled-components/native";

import { Card } from "global/styles";
import Colors from "global/constants/colors";

export const Backdrop = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(112, 112, 112, 0.5);
`;

export const CartContainer = styled(Card)`
  height: 454px;
  width: 80%;
  justify-content: space-between;
  overflow: hidden;
`;

export const ContentArea = styled.View`
  padding: 30px 20px;
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: "Roboto_700Bold_Italic";
  font-size: 24px;
  text-transform: uppercase;
  color: ${Colors.textPrimary};
`;

export const TotalContainer = styled.View`
  flex-direction: row;
`;

export const LightTitle = styled.Text`
  font-family: "Roboto_300Light";
  font-size: 24px;
  text-transform: uppercase;
  color: ${Colors.textPrimary};
`;

export const SaveButton = styled.TouchableOpacity`
  height: 20%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  border-top-width: 1px;
  border-top-color: #e2e2e2;
`;

export const SaveButtonText = styled.Text`
  font-family: "Roboto_700Bold_Italic";
  font-size: 35px;
  color: ${Colors.greenSecondary};
`;
