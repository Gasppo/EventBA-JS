import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import getEventsAPI from "../api/geteventsAPI";
import { EventMarker } from "../Components/EventMarker";
const { height, width } = Dimensions.get("window");

export function LocationEvents({ navigation }) {
  const [region, setRegion] = useState({
    latitude: -34.563508228992,
    longitude: -58.443121667171155,
    latitudeDelta: 0.1,
    longitudeDelta: (0.1 * width) / height,
  });
  const [eventos, setEventos] = useState("");

  useEffect(() => {
    getEventsAPI()
      .then((json) => {
        setEventos(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={region} key={0}>
          <Image
            source={require("../img/personal-location.png")}
            style={{ height: 20, width: 20 }}
          />
        </Marker>
        {eventos.length > 0 &&
          eventos.map((evento) => (
            <EventMarker event={evento} navigation={navigation} />
          ))}
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
