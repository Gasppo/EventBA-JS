import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { API_KEY } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";
import { EventMarker } from "../Components/EventMarker";
import { useEffect } from "react";
import getEventsAPI from "../api/geteventsAPI";
const { height, width } = Dimensions.get("window");

export function LocationEvents() {
  const [region, setRegion] = useState({
    latitude: -34.563508228992,
    longitude: -58.443121667171155,
    latitudeDelta: 0.1,
    longitudeDelta: (0.1 * width) / height,
  });
  const [addressQuery, setAddressQuery] = useState("");
  const [eventos, setEventos] = useState("");

  useEffect(() => {
    getEventsAPI()
      .then((json) => {
        console.log(json);
        setEventos(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitadress = () => {
    getCoord(addressQuery);
    console.log(region);
  };

  const getCoord = (address) => {
    address = address.replace(" ", "%20");
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results[0].geometry.location);
        setRegion({
          ...region,
          latitude: json.results[0].geometry.location.lat,
          longitude: json.results[0].geometry.location.lng,
        });
      });
  };

  return (
    <>
      <MapView style={styles.map} region={region}>
        {eventos && eventos.map((evento) => <EventMarker event={evento} />)}
      </MapView>
      <View style={{ position: "absolute", top: 10, width: "100%" }}>
        <TextInput
          style={{
            borderRadius: 10,
            margin: 10,
            color: "#000",
            borderColor: "#666",
            backgroundColor: "#FFF",
            borderWidth: 1,
            height: 45,
            paddingHorizontal: 10,
            fontSize: 18,
          }}
          onChangeText={(text) => {
            setAddressQuery(text);
          }}
          value={addressQuery}
        />
        <TouchableOpacity onPress={submitadress}>
          <Text>Hola</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
