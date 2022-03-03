import { Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

import {
  Screen,
  ProfileCard,
  Title,
  EmailText,
  ProfileImage,
  ListButtonContainer,
  ListButtonItem,
  ModalButtonsContainer,
  ModalButtonSave,
  ModalButtonCancel,
  ModalButton,
  ModalContentArea,
} from "./styles";

import Icon from "react-native-vector-icons/Ionicons";
import Colors from "global/constants/colors";

import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "global/statesManager/AccountSlice";
import { logout, login } from "global/statesManager/authSlice";
import { RootState } from "global/statesManager";
import { userServices, authServices } from "services";
import {
  Header,
  ErrorMessage,
  SuccessMessage,
  ModalComponent,
  Input,
} from "components";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Account = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.auth);
  const accountData = useSelector((state: RootState) => state.account);
  const [changeAccountVisible, setChangeAccountVisible] = useState(false);
  const [changePasswordVisible, setChangePasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resetPasswordToken, setResetPasswordToken] = useState("");

  const { myAccount, updateMyUser } = userServices();
  const { resetPassword, changePassword } = authServices();

  const updateUserSchema = Yup.object({
    name: Yup.string().required("Digite um nome válido"),
    email: Yup.string()
      .trim()
      .email("Digite um email válido")
      .required("Digite um email"),
  });

  const changePasswordSchema = Yup.object({
    name: Yup.string().required("Digite um nome válido"),
    email: Yup.string()
      .trim()
      .email("Digite um email válido")
      .required("Digite um email"),
  });

  const {
    control: updateUserControl,
    handleSubmit: updateUserHandleSubmit,
    formState: { errors: updateUserErrors },
  } = useForm({
    resolver: yupResolver(updateUserSchema),
    defaultValues: {
      name: userData.user,
      email: userData.email,
    },
  });

  const {
    control: changePasswordControl,
    handleSubmit: changePasswordHandleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const save = (data: { email: string; name: string }) => {
    if (!userData.token) return;
    setIsLoading(true);
    updateMyUser(data, userData.token)
      .then((response) => {
        console.log(response);
        dispatch(
          login({
            email: response.email,
            user: response.name,
            token: response.token,
          })
        );
        setIsLoading(false);
        SuccessMessage("Usuário alterado com sucesso");
        setChangeAccountVisible(false);
      })
      .catch((err) => {
        setIsLoading(false);
        ErrorMessage(err.response.data.message);
      });
  };

  const resetPasswordHandler = () => {
    resetPassword(userData.email)
      .then((response) => {
        if (response.token) {
          setResetPasswordToken(response.token);
        }
        setChangePasswordVisible(true);
      })
      .catch((error) => {
        ErrorMessage(error.response.data.message);
      });
  };

  const changePasswordHandler = (data: {
    password: string;
    confirmPassword: string;
  }) => {
    console.log("Aqui", data.password);

    setIsLoading(true);
    resetPasswordHandler();
    if (!resetPasswordToken) {
      ErrorMessage("Você não tem autorização para isso");
      return;
    }
    changePassword(resetPasswordToken, data.password)
      .then((response) => {
        if (response.status === 200) {
          SuccessMessage("Senha alterada com sucesso");
          setIsLoading(false);
        } else {
          ErrorMessage("Erro");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        ErrorMessage(err.response.data.message);
      });
  };

  useEffect(() => {
    myAccount(`${userData.token}`)
      .then((response) => dispatch(updateUser(response)))
      .catch((err) => ErrorMessage(err.response.data.message));
  }, []);

  if (!accountData) {
    return (
      <Screen>
        <ActivityIndicator size="large" color={Colors.greenPrimary} />
      </Screen>
    );
  }

  return (
    <Screen>
      <Header />
      <ProfileCard style={{ elevation: 15 }}>
        <ProfileImage></ProfileImage>
        <Title>{accountData.name}</Title>
        <EmailText>{accountData.email}</EmailText>
      </ProfileCard>
      <ModalComponent
        modalVisible={changeAccountVisible}
        setModalVisible={setChangeAccountVisible}
      >
        <ModalContentArea>
          <ModalButtonCancel>Change Profile</ModalButtonCancel>
          <Controller
            control={updateUserControl}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                title="Name"
                onChange={onChange}
                value={value}
                errorMessage={updateUserErrors.name?.message}
              />
            )}
            name="name"
          />
          <Controller
            control={updateUserControl}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                title="Email"
                onChange={onChange}
                value={value}
                errorMessage={updateUserErrors.email?.message}
              />
            )}
            name="email"
          />
        </ModalContentArea>
        <ModalButtonsContainer>
          <ModalButton onPress={() => setChangePasswordVisible(false)}>
            <ModalButtonCancel>Cancel</ModalButtonCancel>
          </ModalButton>
          <ModalButton onPress={updateUserHandleSubmit(save)}>
            {isLoading ? (
              <ActivityIndicator size="large" color={Colors.greenPrimary} />
            ) : (
              <ModalButtonSave>Save</ModalButtonSave>
            )}
          </ModalButton>
        </ModalButtonsContainer>
      </ModalComponent>

      <ModalComponent
        modalVisible={changePasswordVisible}
        setModalVisible={setChangePasswordVisible}
      >
        <ModalContentArea>
          <ModalButtonCancel>Change password</ModalButtonCancel>
          <Controller
            control={changePasswordControl}
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
            control={changePasswordControl}
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
        </ModalContentArea>
        <ModalButtonsContainer>
          <ModalButton onPress={() => setChangePasswordVisible(false)}>
            <ModalButtonCancel>Cancel</ModalButtonCancel>
          </ModalButton>
          <ModalButton
            onPress={changePasswordHandleSubmit(changePasswordHandler)}
          >
            {isLoading ? (
              <ActivityIndicator size="large" color={Colors.greenPrimary} />
            ) : (
              <ModalButtonSave>Confirm</ModalButtonSave>
            )}
          </ModalButton>
        </ModalButtonsContainer>
      </ModalComponent>
      <ListButtonContainer>
        <ListButtonItem onPress={() => setChangeAccountVisible(true)}>
          <Title>Edit Profile</Title>
          <Text>
            <Icon name="pencil" size={22} color={Colors.textPrimary} />
          </Text>
        </ListButtonItem>
        <ListButtonItem
          onPress={() => {
            resetPasswordHandler();
          }}
        >
          <Title>Change Password</Title>
          <Text>
            <Icon name="ios-key-sharp" size={22} color={Colors.textPrimary} />
          </Text>
        </ListButtonItem>
        <ListButtonItem
          onPress={() => {
            dispatch(logout());
            SuccessMessage("Deslogado");
            navigation.navigate("InitialPage");
          }}
        >
          <Title>Log Out</Title>
          <Text>
            <Icon name="arrow-forward" size={30} color={Colors.textPrimary} />
          </Text>
        </ListButtonItem>
      </ListButtonContainer>
    </Screen>
  );
};

export default Account;
