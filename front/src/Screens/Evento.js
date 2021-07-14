import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import purchaseTicketAPI from "../api/purchaseTicketAPI";
import getPurchasedTicketsAPI from "../api/getPurchasedTicketsAPI";
import cancelTicketAPI from "../api/cancelTicketAPI";

export function Evento({ navigation, route }) {
  const userid = useSelector((state) => state.user.id);
  const eventid = route.params.item.eventid;
  const [includes, setIncludes] = useState(false);

  useEffect(() => {
    getPurchasedTicketsAPI(userid).then((json) => {
      setIncludes(json.findIndex((element) => element.eventid == eventid) >= 0);
    });
  }, [includes]);
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
        <ScrollView>
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
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Ionicons
              name="globe-sharp"
              size={24}
              color="#4D418D"
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontSize: 16, width: "85%", textAlign: "justify" }}>
              {route.params.item.descripcion}
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 1, alignSelf: "center" }}>
        {userid != 0 && !includes && (
          <TouchableOpacity
            onPress={() => {
              purchaseTicketAPI(userid, route.params.item.eventid);
              setIncludes(!includes);
              navigation.goBack();
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
        )}

        {userid != 0 && includes && (
          <TouchableOpacity
            onPress={() => {
              cancelTicketAPI(userid, route.params.item.eventid);
              setIncludes(!includes);
            }}
            style={{
              borderRadius: 20,
              backgroundColor: "#D2B4DE",
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
              Cancelar entrada
            </Text>
          </TouchableOpacity>
        )}
        {userid == 0 && (
          <Text
            style={{
              fontSize: 15,
              marginVertical: 10,

              color: "grey",
            }}
          >
            Conectarse para reservar entradas
          </Text>
        )}
      </View>
    </View>
  );
}
