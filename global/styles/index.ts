import styled from "styled-components/native";

export const DefaultScreen = styled.View`
  flex: 1;
  background-color: #f7f7f7;
`;

export const Title = styled.Text`
  color: #707070;
  text-align: center;
  font-family: "Roboto_700Bold_Italic";
`;

export const Card = styled.View`
  width: 80%;
  background-color: #fff;
  border-radius: 14px;
  border: 1px solid #dddddd;
  box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.2);
`;

export const GameSelector = styled.TouchableOpacity<{ color: string }>`
  border: 2px solid ${(props) => props.color};
  border-radius: 100px;
  padding: 7px 25px;
  margin: 0 25px 0 0;
  height: 40px;
  width: 100%;
  margin-bottom: 10px;
`;

export const GameSelectorText = styled.Text<{ color: string }>`
  text-align: center;
  color: ${(props) => props.color};
  font-size: 17px;
  font-family: "Roboto_700Bold_Italic";
`;
