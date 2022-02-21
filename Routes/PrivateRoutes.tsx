import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { InitialPage, LoginPage } from "screens";

const Stack = createNativeStackNavigator();

const PrivateRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="InitialPage"
          component={InitialPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PrivateRoutes;
