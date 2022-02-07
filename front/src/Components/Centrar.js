import React from "react";
import * as Animateable from "react-native-animatable";

export const Centrar = ({ children }) => {
  return (
    <Animateable.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
      animation="fadeIn"
    >
      {children}
    </Animateable.View>
  );
};
