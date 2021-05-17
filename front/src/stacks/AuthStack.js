import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { Login } from "../Screens/Login";
import { LoginForm } from "../Screens/LoginForm";
import { Register } from "../Screens/Register";

const Stack = createStackNavigator();

export const AuthStack = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{
          headerStyle: {
            backgroundColor: "#4D418D",
          },
          headerTitle: () => null,
        }}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{
          headerStyle: {
            backgroundColor: "#4D418D",
          },
          headerTitle: () => null,
          headerLeft: () => {
            return (
              <View style={{ marginLeft: 20 }}>
                <Text
                  style={{ fontWeight: "600", color: "white", fontSize: 18 }}
                >
                  Crear Cuenta
                </Text>
              </View>
            );
          },
        }}
        component={Register}
      />

      <Stack.Screen
        name="LoginForm"
        options={{
          headerStyle: {
            backgroundColor: "#4D418D",
          },
          headerTitle: () => null,
          headerLeft: () => {
            return (
              <View style={{ marginLeft: 20 }}>
                <Text
                  style={{ fontWeight: "600", color: "white", fontSize: 18 }}
                >
                  Log in
                </Text>
              </View>
            );
          },
        }}
        component={LoginForm}
      />
    </Stack.Navigator>
  );
};
