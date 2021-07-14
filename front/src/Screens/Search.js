import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import getEventsAPI from "../api/geteventsAPI";
import { FeedItem } from "../Components/FeedItem";
import { TouchableImage } from "../Components/TouchableImage";

export function Search({ navigation }) {
  const [eventos, setEventos] = useState("");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [metaquery, setMetaquery] = useState("");

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
      <View style={{ flex: 1 }}>
        <View style={styles.viewCentered}>
          <TextInput
            style={styles.inputRegister}
            onChangeText={(text) => {
              setQuery(text);
            }}
            value={query}
            placeholder="Buscar..."
          />
        </View>
        <View style={styles.viewCentered}>
          <TouchableImage
            text="Museo"
            src="Museo"
            onPressImg={() => {
              metaquery.includes("museo")
                ? setMetaquery((prev) => prev.replace("museo", ""))
                : setMetaquery((prev) => prev + "museo");
            }}
          />
          <TouchableImage
            text="Teatro"
            onPressImg={() => {
              metaquery.includes("teatro")
                ? setMetaquery((prev) => prev.replace("teatro", ""))
                : setMetaquery((prev) => prev + "teatro");
            }}
            src="Teatro"
          />
          <TouchableImage
            text="Cine"
            onPressImg={() => {
              metaquery.includes("cine")
                ? setMetaquery((prev) => prev.replace("cine", ""))
                : setMetaquery((prev) => prev + "cine");
            }}
            src="Cine"
          />
          <TouchableImage
            text="Música"
            onPressImg={() => {
              metaquery.includes("musica")
                ? setMetaquery((prev) => prev.replace("musica", ""))
                : setMetaquery((prev) => prev + "musica");
            }}
            src="Musica"
          />
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <View style={{ borderBottomWidth: 1 }}>
          <Text style={styles.textoNuevo}>Que hay de nuevo</Text>
        </View>

        {loading && (
          <View>
            <Text>Loading events...</Text>
          </View>
        )}

        {!loading && (
          <FlatList
            renderItem={({ item }) => {
              return <FeedItem item={item} navigation={navigation} />;
            }}
            keyExtractor={(item) => item.eventid.toString()}
            data={
              eventos
                ? eventos
                    .filter((evento) => {
                      return JSON.stringify(evento)
                        .toLowerCase()
                        .includes(query.toLowerCase());
                    })
                    .filter((evento) => {
                      return JSON.stringify(evento.metatags)
                        .toLowerCase()
                        .includes(metaquery.toLowerCase());
                    })
                : []
            }
          />
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
});
