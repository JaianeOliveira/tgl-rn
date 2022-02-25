import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomePage, AccountPage, NewBetPage } from "screens";
import Colors from "global/constants/colors";

import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const PrivateRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-sharp";
          } else if (route.name === "NewBet") {
            iconName = "create";
          } else if (route.name === "Account") {
            iconName = "person";
          } else {
            iconName = "circle";
          }

          return <Icon name={iconName} size={26} color={color} />;
        },
        tabBarActiveTintColor: Colors.greenPrimary,
        tabBarInactiveTintColor: Colors.textPrimary,
        tabBarLabelStyle: {
          fontStyle: "italic",
          fontSize: 16,
          fontWeight: "bold",
          textAlign: "center",
        },
        tabBarStyle: {
          height: 60,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="NewBet"
        component={NewBetPage}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountPage}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default PrivateRoutes;
