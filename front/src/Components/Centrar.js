import React from "react";
import { Dimensions, View } from "react-native";

export const Centrar = ({ children }) => {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      {children}
    </View>
  );
};
