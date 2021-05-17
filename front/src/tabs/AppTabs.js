import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Entradas } from "../Screens/Entradas";
import { Perfil } from "../Screens/Perfil";
import { HomeStack } from "../stacks/HomeStack";
import { SearchStack } from "../stacks/SearchStack";

const Tabs = createBottomTabNavigator();

export const AppTabs = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Inicio") {
            iconName = "home";
          } else if (route.name === "Buscar") {
            iconName = "search1";
          } else if (route.name === "Entradas") {
            return (
              <MaterialCommunityIcons
                name={"ticket"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Perfil") {
            return (
              <FontAwesome5 name={"user-circle"} size={size} color={color} />
            );
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#4D418D",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Inicio" component={HomeStack}></Tabs.Screen>
      <Tabs.Screen name="Buscar" component={SearchStack}></Tabs.Screen>
      <Tabs.Screen name="Entradas" component={Entradas}></Tabs.Screen>
      <Tabs.Screen name="Perfil" component={Perfil}></Tabs.Screen>
    </Tabs.Navigator>
  );
};
