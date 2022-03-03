import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useState } from "react";

import { Screen, PageTitle, ButtonText, AuthButton } from "./styles";
import { Card } from "global/styles";
import { Input, ErrorMessage, SuccessMessage } from "components";

import { AntDesign } from "@expo/vector-icons";

import Colors from "global/constants/colors";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { authServices } from "services";

const ResetPasswordPage = ({ navigation, route }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const { changePassword } = authServices();
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

  const changePasswordHandler = ({ password }: { password: string }) => {
    setIsLoading(true);
    changePassword(route.params.token, password)
      .then((response) => {
        if (response.status === 200) {
          SuccessMessage("Senha alterada com sucesso");
          reset();
          setIsLoading(false);
          navigation.navigate("Login");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        ErrorMessage(err.response.data.message);
      });
  };
  return (
    <Screen>
      <PageTitle>Change Password</PageTitle>
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
        <AuthButton onPress={handleSubmit(changePasswordHandler)}>
          <ButtonText green={true}>
            {isLoading ? (
              <ActivityIndicator size="large" color={Colors.greenPrimary} />
            ) : (
              "Confirm"
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
