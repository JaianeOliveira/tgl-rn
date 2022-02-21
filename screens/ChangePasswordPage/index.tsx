import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Screen, PageTitle, ButtonText, AuthButton } from "./styles";
import { Card } from "global/styles";
import { Input } from "components";

import { AntDesign } from "@expo/vector-icons";

import Colors from "global/constants/colors";

const ResetPasswordPage = ({ navigation }: any) => {
  return (
    <Screen>
      <PageTitle>Registration</PageTitle>
      <Card style={styles.boxShadow}>
        <Input title="Password" />
        <Input title="Confirm Password" />
        <AuthButton>
          <ButtonText
            green={true}
            onPress={() => navigation.navigate("ChangePassword")}
          >
            {" "}
            Reset Password
          </ButtonText>
          <AntDesign name="arrowright" size={32} color={Colors.greenPrimary} />
        </AuthButton>
      </Card>
      <AuthButton onPress={() => navigation.navigate("Login")}>
        <AntDesign name="arrowleft" size={32} color={Colors.textPrimary} />
        <ButtonText>Back</ButtonText>
      </AuthButton>
    </Screen>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    elevation: 5,
  },
});

export default ResetPasswordPage;
