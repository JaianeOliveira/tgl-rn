import styled from "styled-components/native";

import Colors from "global/constants/colors";

export const HeaderContainer = styled.View`
  width: 100%;
  height: 105px;
  background: transparent;
  border-bottom-color: #ebebeb;
  border-bottom-width: 1px;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: "Roboto_700Bold_Italic";
  font-size: 44px;
  color: ${Colors.textPrimary};

  border-bottom-color: ${Colors.greenPrimary};
  border-bottom-width: 6px;
`;
