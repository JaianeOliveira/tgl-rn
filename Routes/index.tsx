import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useSelector } from "react-redux";
import { RootState } from "global/statesManager";
import React from "react";

const stack = createNativeStackNavigator();

// const Routes = () => {
//   const userData = useSelector((props: RootState) => props.auth);
//   return (
//     <NavigationContainer>
//       {userData.token ? <PrivateRoutes /> : <AuthRoutes />}
//     </NavigationContainer>
//   );
// };
export { AuthRoutes, PrivateRoutes };
