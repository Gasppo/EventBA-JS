import React from "react";
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
  return (
    <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={onPressImg}>
      <View style={styles.logoContainer}>
        <Image source={images[src]} style={styles.tinyLogo} />
      </View>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 65,
    height: 65,
  },
  logoContainer: {
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
  },
});
