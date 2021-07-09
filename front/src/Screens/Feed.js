import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import getEventsAPI from "../api/geteventsAPI";
import { CarouselItem } from "../Components/CarouselItem";
import { FeedItem } from "../Components/FeedItem";

export function Feed({ navigation }) {
  const [eventos, setEventos] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setLoading(true);
    getEventsAPI()
      .then((json) => {
        setEventos(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        {!loading && (
          <FlatList
            horizontal
            pagingEnabled
            renderItem={({ item }) => {
              return <CarouselItem item={item} navigation={navigation} />;
            }}
            keyExtractor={(item) => item.eventid.toString()}
            data={eventos.sort(() => 0.5 - Math.random()).slice(0, 5)}
          />
        )}
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ borderBottomWidth: 1 }}>
          <TouchableOpacity
            onPress={() => {
              console.log(user);
            }}
          >
            <Text
              style={{
                marginBottom: 5,
                marginLeft: 5,
                color: "#4D418D",
                fontWeight: "600",
                fontSize: 20,
              }}
            >
              Que hay de nuevo
            </Text>
          </TouchableOpacity>
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
            data={eventos}
          />
        )}
      </View>
    </View>
  );
}
