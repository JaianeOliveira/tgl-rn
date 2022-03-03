import styled from "styled-components/native";

export const CartItemContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin: 5px 0;
`;

export const TrashButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 15%;
`;
export const ContentArea = styled.View<{ color?: string }>`
  width: 85%;
  border-radius: 5px;
  border-left-width: 3px;
  border-left-color: ${(props) => (props.color ? props.color : "#707070")};
  padding-left: 10px;
  height: 70px;
  justify-content: space-evenly;
`;

export const Title = styled.Text<{ color?: string }>`
  font-family: "Roboto_700Bold_Italic";
  font-size: 15px;
  color: ${(props) => (props.color ? props.color : "#707070")};
`;

export const LineText = styled.View`
  flex-direction: row;
`;

export const TotalText = styled.Text`
  font-family: "Roboto_300Light_Italic";
  font-size: 15px;
`;
