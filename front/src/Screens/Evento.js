import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export function Evento({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "white",
        paddingHorizontal: 30,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      >
        <Text>Parte superior</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Ionicons
            name="heart"
            size={24}
            color="#4D418D"
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 20 }}>{route.params.item.rating}</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Ionicons
            name="globe-sharp"
            size={24}
            color="#4D418D"
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 20 }}>{route.params.item.descripcion}</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Ionicons
            name="location-sharp"
            size={24}
            color="#4D418D"
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 20 }}>{route.params.item.ubicacion}</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Ionicons
            name="calendar-sharp"
            size={24}
            color="#4D418D"
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 20 }}>{route.params.item.fecha}</Text>
        </View>
      </View>
    </View>
  );
}
