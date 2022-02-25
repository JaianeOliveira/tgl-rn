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
  width: 100%;
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
