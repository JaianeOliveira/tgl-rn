import styled from "styled-components/native";

import { Card } from "global/styles";
import Colors from "global/constants/colors";

export const Backdrop = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(112, 112, 112, 0.5);
`;

export const CartContainer = styled(Card)`
  max-height: 454px;
  min-height: 300px;
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
  height: 90px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  border-top-width: 1px;
  border-top-color: #e2e2e2;
  flex-direction: row;
`;

export const SaveButtonText = styled.Text`
  font-family: "Roboto_700Bold_Italic";
  font-size: 35px;
  color: ${Colors.greenSecondary};
`;

export const TopView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const NormalText = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 17px;
  color: ${Colors.textPrimary};
`;
