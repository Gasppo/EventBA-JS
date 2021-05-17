import React from "react";
import { View } from "react-native";

export const Centrar = ({ children }) => {
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
