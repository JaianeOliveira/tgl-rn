import { StyleSheet, ActivityIndicator } from "react-native";
import React, { useState } from "react";

import {
  Screen,
  PageTitle,
  ButtonText,
  AuthButton,
  ForgetPasswordButtonText,
  ForgetPasswordButton,
} from "./styles";
import { Card } from "global/styles";
import { Input, ErrorMessage, SuccessMessage } from "components";

import { AntDesign } from "@expo/vector-icons";

import Colors from "global/constants/colors";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { authServices } from "services";

import { login } from "global/statesManager/authSlice";
import { useDispatch } from "react-redux";

const LoginPage = ({ navigation }: any) => {
  const { loginUser } = authServices();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

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

  const submit = (data: { email: string; password: string }) => {
    setIsLoading(true);
    loginUser(data)
      .then((response) => {
        dispatch(
          login({
            email: response.user.email,
            user: response.user.name,
            token: response.token.token,
          })
        );
        SuccessMessage("Logado");
        reset();
        setIsLoading(false);
        navigation.navigate("PrivateRoutes");
      })
      .catch((err) => {
        setIsLoading(false);
        ErrorMessage(err.response.data.message);
      });
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
          <ButtonText green={true}>
            {isLoading ? (
              <ActivityIndicator size="large" color={Colors.greenPrimary} />
            ) : (
              "Log In"
            )}
          </ButtonText>
          {!isLoading && (
            <AntDesign
              name="arrowright"
              size={32}
              color={Colors.greenPrimary}
            />
          )}
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
