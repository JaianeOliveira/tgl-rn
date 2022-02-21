import styled from "styled-components/native";

import Colors from "global/constants/colors";

export const Container = styled.View`
  width: 100%;
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
  padding: 20px 15px 5px 15px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: `${Colors.placeholder}`,
})`
  width: 100%;
  color: ${Colors.textSecondary};
  font-family: "Roboto_700Bold_Italic";
  font-size: 17px;
`;

export const Error = styled.Text`
  font-family: "Roboto_300Light_Italic";
  color: #d62e2e;
`;
