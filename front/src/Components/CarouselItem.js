import React, { useState } from "react";
import { Dimensions, ImageBackground, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { API_SERVER } from "../constants";

export const CarouselItem = ({ item, navigation }) => {
  const [oprimido, onPressOprimido] = useState(false);
  const windowWidth = Dimensions.get("window").width;
  const imageSource = {
    uri: item.imagen
      ? `http://${API_SERVER}:5000/static/${item.imagen}`
      : "https://picsum.photos/640/480",
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Evento", {
          item: item,
          imageSource: imageSource,
        });
      }}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: windowWidth,
        borderWidth: 0,
      }}
    >
      <ImageBackground
        source={imageSource}
        style={{
          width: 300,
          height: 300,
          marginLeft: 5,
          borderRadius: 5,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", backgroundColor: "black" }}>
          {item.nombre}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
