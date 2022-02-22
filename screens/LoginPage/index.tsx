import { StyleSheet } from "react-native";
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
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const LoginPage = ({ navigation }: any) => {
  const schema = Yup.object({
    email: Yup.string()
      .trim()
      .email("Digite um email válido")
      .required("Digite um email"),
    password: Yup.string()
      .trim()
      .required("Digite uma senha")
      .min(4, "Digite uma senha válida"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit = (data: any) => {
    console.log(data);
    reset();
    navigation.navigate("Home");
  };

  return (
    <Screen>
      <PageTitle>Authentication</PageTitle>
      <Card style={styles.boxShadow}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              title="Email"
              onChange={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
          name="email"
        />
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
        <ForgetPasswordButton
          onPress={() => navigation.navigate("ResetPassword")}
        >
          <ForgetPasswordButtonText>
            I forget my password
          </ForgetPasswordButtonText>
        </ForgetPasswordButton>
        <AuthButton onPress={handleSubmit(submit)}>
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
