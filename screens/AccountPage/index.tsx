import { View, Text } from "react-native";
import React, { useEffect } from "react";

import {
  Screen,
  ProfileCard,
  Title,
  EmailText,
  ProfileImage,
  ListButtonContainer,
  ListButtonItem,
} from "./styles";
import { Card } from "global/styles";

import Icon from "react-native-vector-icons/Ionicons";
import Colors from "global/constants/colors";

import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "global/statesManager/AccountSlice";
import { logout } from "global/statesManager/authSlice";
import { RootState } from "global/statesManager";
import { userServices } from "services";
import { Header, ErrorMessage, SuccessMessage } from "components";

const Account = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.auth);
  const accountData = useSelector((state: RootState) => state.account);

  const { myAccount } = userServices();

  useEffect(() => {
    myAccount(`${userData.token}`)
      .then((response) => dispatch(updateUser(response)))
      .catch((err) => ErrorMessage(err.response.data.message));
  }, []);

  if (!accountData) {
    return (
      <Screen>
        <Text>Carregando...</Text>
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
      <ListButtonContainer>
        <ListButtonItem>
          <Title>Edit Profile</Title>
          <Text>
            <Icon name="pencil" size={22} color={Colors.textPrimary} />
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
