import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useState } from "react";

import { Screen, PageTitle, ButtonText, AuthButton } from "./styles";
import { Card } from "global/styles";
import { Input, ErrorMessage } from "components";

import { AntDesign } from "@expo/vector-icons";

import Colors from "global/constants/colors";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { authServices } from "services";

const ResetPasswordPage = ({ navigation }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const { resetPassword } = authServices();

  const schema = Yup.object({
    email: Yup.string()
      .required("Digite um email")
      .trim()
      .email("Digite um email válido"),
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
    },
  });

  const resetHandler = ({ email }: { email: string }) => {
    setIsLoading(true);
    resetPassword(email)
      .then((response) => {
        if (response.token) {
          reset();
          setIsLoading(false);
          navigation.navigate("ChangePassword", { token: response.token });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        ErrorMessage(error.response.data.message);
      });
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
              title="Email"
              onChange={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
          name="email"
        />
        <AuthButton onPress={handleSubmit(resetHandler)}>
          <ButtonText green={true}>
            {isLoading ? (
              <ActivityIndicator size="large" color={Colors.greenPrimary} />
            ) : (
              "Send Link"
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
export default ResetPasswordPage;
