import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import getEventsAPI from "../api/geteventsAPI";

export function Perfil({ navigation }) {
  const [eventos, setEventos] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    setLoading(true);
    getEventsAPI()
      .then((json) => {
        setEventos(json);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, backgroundColor: "#eff1f8" }}>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.textTitle}>{user.username}</Text>
          <Text style={styles.textSubtitle}>{user.email}</Text>
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <View style={{ borderBottomWidth: 1 }}>
          <Text style={styles.textoNuevo}>Que hay de nuevo</Text>
        </View>

        {loading && (
          <View>
            <Text>Loading data...</Text>
          </View>
        )}

        {!loading && <View style={{ marginLeft: 10 }}></View>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputRegister: {
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    paddingVertical: 15,
    paddingLeft: 10,
    borderRadius: 30,
    width: 300,
    backgroundColor: "#f5f5f5",
  },
  viewCentered: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textoNuevo: {
    marginBottom: 5,
    marginLeft: 5,
    color: "#4D418D",
    fontWeight: "600",
    fontSize: 20,
  },
  textTitle: {
    color: "#4D418D",
    fontSize: 20,
    marginBottom: 20,
  },
  textSubtitle: { color: "#4D418D", fontSize: 14, marginBottom: 20 },
});
