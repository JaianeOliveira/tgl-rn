import styled from "styled-components/native";

import { DefaultScreen, Card } from "global/styles";
import Colors from "global/constants/colors";

export const Screen = styled(DefaultScreen)`
  justify-content: flex-start;
  align-items: center;
`;

export const ProfileCard = styled(Card)`
  margin: 30px 0;
  border: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: "Roboto_700Bold_Italic";
  color: ${Colors.textPrimary};
  font-size: 22px;
`;
export const EmailText = styled.Text`
  font-family: "Roboto_400Regular_Italic";
  color: ${Colors.textPrimary};
  font-size: 16px;
`;

export const ProfileImage = styled.View`
  background-color: ${Colors.greenPrimary};
  height: 100px;
  width: 100px;
  border-radius: 100px;
  margin-bottom: 10px;
`;

export const ListButtonContainer = styled.View`
  width: 90%;
`;

export const ListButtonItem = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.textTernary};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px;
`;
