import { View, Text, StyleSheet } from "react-native";
import React from "react";

import {
  Screen,
  PageTitle,
  ButtonText,
  AuthButton,
  ForgetPasswordButtonText,
  ForgetPasswordButton,
} from "./styles";
import { Card } from "global/styles";
import { Input } from "components";

import { AntDesign } from "@expo/vector-icons";

import Colors from "global/constants/colors";

const LoginPage = ({ navigation }: any) => {
  return (
    <Screen>
      <PageTitle>Authentication</PageTitle>
      <Card style={styles.boxShadow}>
        <Input title="Email" />
        <Input title="Password" />
        <ForgetPasswordButton
          onPress={() => navigation.navigate("ResetPassword")}
        >
          <ForgetPasswordButtonText>
            I forget my password
          </ForgetPasswordButtonText>
        </ForgetPasswordButton>
        <AuthButton>
          <ButtonText green={true}> Log In</ButtonText>
          <AntDesign name="arrowright" size={32} color={Colors.greenPrimary} />
        </AuthButton>
      </Card>
      <AuthButton onPress={() => navigation.navigate("Registration")}>
        <ButtonText>Sign In</ButtonText>
        <AntDesign name="arrowright" size={32} color={Colors.textPrimary} />
      </AuthButton>
    </Screen>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    elevation: 5,
  },
});

export default LoginPage;
