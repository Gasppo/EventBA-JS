import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const images = {
  Museo: require("../img/museum.png"),
  Teatro: require("../img/Theater.png"),
  Cine: require("../img/clapperboard.png"),
  Musica: require("../img/music-note.png"),
  Foto: require("../img/camera.png"),
  Cultura: require("../img/pillar.png"),
  Exterior: require("../img/bicycle.png"),
  Danza: require("../img/dancer.png"),
};

export const TouchableImage = ({ text, src, onPressImg }) => {
  const [selected, setSelected] = useState(false);

  const styles = StyleSheet.create({
    tinyLogo: {
      width: 65,
      height: 65,
    },
    logoContainer: {
      borderWidth: selected ? 2 : 0.5,
      borderRadius: 5,
      padding: 10,
      borderColor: selected ? "#4D418D" : "grey",
    },
  });

  return (
    <TouchableOpacity
      style={{ marginHorizontal: 5 }}
      onPress={() => {
        setSelected((prev) => !prev);
        onPressImg();
      }}
    >
      <View style={styles.logoContainer}>
        <Image source={images[src]} style={styles.tinyLogo} />
      </View>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
