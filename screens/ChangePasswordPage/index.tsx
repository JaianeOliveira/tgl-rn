import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Screen, PageTitle, ButtonText, AuthButton } from "./styles";
import { Card } from "global/styles";
import { Input } from "components";

import { AntDesign } from "@expo/vector-icons";

import Colors from "global/constants/colors";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const ResetPasswordPage = ({ navigation }: any) => {
  const schema = Yup.object({
    password: Yup.string().trim().required().min(4),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "A senha não é igual a anterior")
      .required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  return (
    <Screen>
      <PageTitle>Registration</PageTitle>
      <Card style={styles.boxShadow}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              title="Password"
              onChange={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
          name="password"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              title="Confirm Password"
              onChange={onChange}
              value={value}
              errorMessage={errors.confirmPassword?.message}
            />
          )}
          name="confirmPassword"
        />
        <AuthButton onPress={handleSubmit(() => console.log("Reset"))}>
          <ButtonText
            green={true}
            onPress={() => navigation.navigate("ChangePassword")}
          >
            {" "}
            Confirm
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
