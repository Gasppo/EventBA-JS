import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../AuthProvider";
import { Evento } from "../Screens/Evento";
import { LocationEvents } from "../Screens/LocationEvents";
import { Search } from "../Screens/Search";

const Stack = createStackNavigator();

export const LocationStack = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        options={{
          headerShown: false,
        }}
        component={LocationEvents}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: "#4D418D",
          },
          headerTitle: () => null,
          headerLeft: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 4,
                }}
              >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <MaterialCommunityIcons
                    name={"arrow-left"}
                    size={30}
                    color={"white"}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontWeight: "bold",
                    marginLeft: 10,
                    fontSize: 18,
                    color: "white",
                  }}
                >
                  {route.params.item.nombre}
                </Text>
              </View>
            );
          },
        })}
        name="Evento"
        component={Evento}
      />
    </Stack.Navigator>
  );
};
