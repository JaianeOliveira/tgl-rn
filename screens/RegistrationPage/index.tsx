import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Screen, PageTitle, ButtonText, AuthButton } from "./styles";
import { Card } from "global/styles";
import { Input, ErrorMessage, SuccessMessage } from "components";

import { AntDesign } from "@expo/vector-icons";

import Colors from "global/constants/colors";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { userServices, authServices } from "services";
import { login } from "global/statesManager/authSlice";
import { useDispatch } from "react-redux";

const RegistrationPage = ({ navigation }: any) => {
  const { createUser } = userServices();
  const { loginUser } = authServices();
  const dispatch = useDispatch();
  const schema = Yup.object({
    name: Yup.string().required("Digite um nome válido"),
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
      name: "",
      email: "",
      password: "",
    },
  });

  const register = (data: {
    email: string;
    password: string;
    name: string;
  }) => {
    createUser(data)
      .then((response) => {
        dispatch(
          login({
            email: response.user.email,
            user: response.user.name,
            token: response.token.token,
          })
        );
        reset();
        SuccessMessage("Usuário criado com sucesso!");
        navigation.navigate("Home");
      })
      .catch((err) => ErrorMessage(err.response.data.message));
  };

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
              title="Name"
              onChange={onChange}
              value={value}
              errorMessage={errors.name?.message}
            />
          )}
          name="name"
        />
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
        <AuthButton onPress={handleSubmit(register)}>
          <ButtonText green={true}> Register</ButtonText>
          <AntDesign name="arrowright" size={32} color={Colors.greenPrimary} />
        </AuthButton>
      </Card>
      <AuthButton onPress={() => navigation.goBack()}>
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

export default RegistrationPage;
