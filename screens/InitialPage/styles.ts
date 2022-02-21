import styled from "styled-components/native";

import { DefaultScreen, Title } from "global/styles";
import Colors from "global/constants/colors";

export const Screen = styled(DefaultScreen)`
  justify-content: center;
  align-items: center;
`;

export const FirstTitle = styled(Title)`
  font-size: 65px;
`;

export const SecondTitle = styled(Title)`
  font-size: 75px;
  text-transform: uppercase;
  margin: 6% 0;
`;

export const TextHighlight = styled.View`
  height: 39px;
  width: 144px;
  border-radius: 50px;
  background-color: ${Colors.greenPrimary};
  justify-content: center;
  align-items: center;
  margin: 8% 0 0 0;
`;

export const ForTitle = styled(Title)`
  font-size: 22px;
  color: #fff;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: ${Colors.greenPrimary};
  width: 80%;
  height: 58px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 8%;
`;
export const LoginButtonText = styled(ForTitle)`
  font-size: 30px;
`;
