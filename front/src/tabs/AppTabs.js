import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { HomeStack } from "../stacks/HomeStack";
import { LocationStack } from "../stacks/LocationStack";
import { ProfileStack } from "../stacks/ProfileStack";
import { SearchStack } from "../stacks/SearchStack";

const Tabs = createMaterialTopTabNavigator();

export const AppTabs = ({}) => {
  return (
    <Tabs.Navigator
      swipeEnabled={true}
      tabBarPosition="bottom"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let actualSize = 20;
          if (route.name === "Inicio") {
            iconName = "home";
          } else if (route.name === "Buscar") {
            iconName = "search1";
          } else if (route.name === "Cercanos") {
            return (
              <MaterialCommunityIcons
                name={"map-marker"}
                size={actualSize}
                color={color}
              />
            );
          } else if (route.name === "Perfil") {
            return (
              <FontAwesome5
                name={"user-circle"}
                size={actualSize}
                color={color}
              />
            );
          }

          return <AntDesign name={iconName} size={actualSize} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#4D418D",
        inactiveTintColor: "gray",
        showIcon: true,
        showLabel: false,
      }}
    >
      <Tabs.Screen name="Inicio" component={HomeStack}></Tabs.Screen>
      <Tabs.Screen name="Buscar" component={SearchStack}></Tabs.Screen>
      <Tabs.Screen name="Cercanos" component={LocationStack}></Tabs.Screen>
      <Tabs.Screen name="Perfil" component={ProfileStack}></Tabs.Screen>
    </Tabs.Navigator>
  );
};
