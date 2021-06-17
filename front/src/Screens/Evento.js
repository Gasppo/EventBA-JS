import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import purchaseTicketAPI from "../api/purchaseTicketAPI";

export function Evento({ navigation, route }) {
  const userid = useSelector((state) => state.user.id);
  useEffect(() => {
    console.log(userid);
  }, []);
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
          flex: 3,
          justifyContent: "center",
          alignSelf: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          source={route.params.imageSource}
          style={{
            width: "130%",
            height: "100%",
            marginHorizontal: -30,
          }}
        />
      </View>
      <View style={{ flex: 2 }}>
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
      <View style={{ flex: 1, alignSelf: "center" }}>
        <TouchableOpacity
          onPress={() => {
            purchaseTicketAPI(userid, route.params.item.eventid);
          }}
          style={{
            borderRadius: 20,
            backgroundColor: "#4D418D",
            marginVertical: 40,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              marginVertical: 10,
              marginHorizontal: 80,
              color: "white",
            }}
          >
            Reservar Entrada
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
