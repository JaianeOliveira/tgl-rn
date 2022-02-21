import { View, Text } from "react-native";
import React from "react";

import { Container, TextInput } from "./styles";

const Input = (props: { title: string }) => {
  return (
    <Container>
      <TextInput placeholder={props.title} />
    </Container>
  );
};

export default Input;
