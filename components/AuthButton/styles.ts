import styled from "styled-components/native";

import Colors from "global/constants/colors";

export const AuthButtonContainer = styled.TouchableOpacity`
  height: 80px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const AuthButtonText = styled.Text`
  font-size: 35px;
  font-family: "Roboto_700Bold_Italic";
  color: ${Colors.greenPrimary};
`;
