import { AntDesign } from "@expo/vector-icons";
import Moment from "moment";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const FeedItem = ({ item, navigation }) => {
  const [oprimido, onPressOprimido] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Evento", {
          item: item,
        });
      }}
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",

        borderWidth: 0,
      }}
    >
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Image
          source={{ uri: "https://picsum.photos/640/480" }}
          style={{ width: 100, height: 100, marginLeft: 5, borderRadius: 5 }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ marginLeft: 10, color: "#696969" }}>
            {Moment(item.fecha).format("DD/MM/YY HH:MM")}
          </Text>
          <Text
            style={{
              marginTop: 10,
              marginBottom: 5,
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 18,
              color: "#484848",
            }}
          >
            {item.nombre}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginBottom: 10,
              fontSize: 14,
              color: "#696969",
            }}
          >
            {item.organizacion}
          </Text>
          <Text style={{ marginLeft: 10, fontSize: 11, color: "#696969" }}>
            {item.ubicacion}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              onPressOprimido(!oprimido);
              console.log(`Favorited ${item.nombre}: ${!oprimido}`);
            }}
            style={{ marginRight: 20, marginBottom: 10 }}
          >
            {!oprimido && (
              <AntDesign name={"hearto"} size={20} color={"#4D418D"} />
            )}
            {oprimido && (
              <AntDesign name={"heart"} size={20} color={"#4D418D"} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
