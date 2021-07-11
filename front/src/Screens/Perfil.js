import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import getPurchasedTicketsAPI from "../api/getPurchasedTicketsAPI";
import { Centrar } from "../Components/Centrar";
import { FeedItem } from "../Components/FeedItem";

export function Perfil({ navigation }) {
  const [eventos, setEventos] = useState("");
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    setLoading(true);
    getPurchasedTicketsAPI(user.id)
      .then((json) => {
        setEventos(json);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  }, []);

  const reload = () => {
    setLoading(true);
    setRefresh(true);
    getPurchasedTicketsAPI(user.id)
      .then((json) => {
        setEventos(json);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
    setRefresh(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, backgroundColor: "#eff1f8" }}>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <View
              style={{ borderWidth: 1, borderRadius: 50, borderColor: "grey" }}
            >
              <Image
                source={require("../img/dancer.png")}
                style={styles.tinyLogo}
              />
            </View>
            <View>
              <Text style={styles.textTitle}>{user.username}</Text>
              <Text style={styles.textSubtitle}>{user.email}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <TouchableOpacity
          onPress={() => {
            reload();
          }}
          style={{ borderBottomWidth: 1 }}
        >
          <Text style={styles.textoNuevo}>Eventos Comprados</Text>
        </TouchableOpacity>

        {loading && (
          <View>
            <Text>Loading data...</Text>
          </View>
        )}

        {!loading && (
          <View style={{ marginLeft: 10, marginBottom: 30 }}>
            <FlatList
              renderItem={({ item }) => {
                return <FeedItem item={item} navigation={navigation} />;
              }}
              keyExtractor={(item) => item.eventid.toString()}
              data={eventos}
              onRefresh={() => reload()}
              refreshing={refresh}
            />
          </View>
        )}

        {!loading && user.username === "TempUser" && (
          <Centrar>
            <Text
              style={{
                marginHorizontal: 10,
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Debe conectarse con su usuario para poder visualizar sus reservas
            </Text>
          </Centrar>
        )}
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
  textTitleHeader: {
    color: "white",
    fontSize: 20,
    marginVertical: 15,
    marginLeft: 10,
  },
  textTitle: {
    color: "#4D418D",
    fontSize: 20,
    marginVertical: 15,
    marginLeft: 5,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  textSubtitle: {
    color: "#4D418D",
    fontSize: 14,
    marginBottom: 20,
    marginLeft: 10,
  },
});
