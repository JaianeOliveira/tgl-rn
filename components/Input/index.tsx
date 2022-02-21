import { View, Text } from "react-native";
import React from "react";

import { Container, TextInput, Error } from "./styles";

const Input = (props: {
  title: string;
  onChange?: (params: any) => void;
  value?: string;
  errorMessage?: string;
  resolver?: any;
}) => {
  return (
    <Container>
      <TextInput
        placeholder={props.title}
        onChangeText={props.onChange}
        value={props.value}
        {...props.resolver}
      />
      <Error>{props.errorMessage}</Error>
      {/* {props.errorMessage ? <Error>{props.errorMessage}</Error> : <></>} */}
    </Container>
  );
};

export default Input;
