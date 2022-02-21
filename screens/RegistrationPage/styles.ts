import styled from "styled-components/native";

import { DefaultScreen, Title } from "global/styles";
import Colors from "global/constants/colors";

export const Screen = styled(DefaultScreen)`
  justify-content: center;
  align-items: center;
`;

export const PageTitle = styled(Title)`
  font-size: 35px;
  margin-bottom: 33px;
`;

export const AuthButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  height: 80px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonText = styled(Title)<{ green?: boolean }>`
  color: ${(props: any) =>
    props.green ? Colors.greenPrimary : Colors.textPrimary};
  font-size: 35px;
  margin: 0 10px;
`;
