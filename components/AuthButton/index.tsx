import { View, Text } from "react-native";
import React from "react";

import { AuthButtonContainer, AuthButtonText } from "./styles";

const AuthButton = (props: { children: JSX.Element; title?: string }) => {
  return (
    <AuthButtonContainer>
      <AuthButtonText>{props.children}</AuthButtonText>
    </AuthButtonContainer>
  );
};

export default AuthButton;
