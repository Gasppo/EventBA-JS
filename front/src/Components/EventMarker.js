import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Marker } from "react-native-maps";
import { API_KEY, API_SERVER } from "../constants";

export const EventMarker = ({ navigation, event }) => {
  const [coord, setCoord] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.09,
    longitudeDelta: 0.02,
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    console.log("Loading...");
    address = event.ubicacion.replace(" ", "%20");
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCoord({
          latitude: json.results[0].geometry.location.lat,
          longitude: json.results[0].geometry.location.lng,
          latitudeDelta: 0,
          longitudeDelta: 0,
        });
        setLoading(false);
      });
  }, [event]);

  return (
    <>
      {!loading && (
        <Marker
          onPress={() => {
            navigation.navigate("Evento", {
              item: event,
              imageSource: {
                uri: event.imagen
                  ? `http://${API_SERVER}:5000/static/${event.imagen}`
                  : "https://picsum.photos/640/480",
              },
            });
          }}
          key={event.eventid}
          coordinate={coord}
          title={event.nombre}
          description={`${event.descripcion} - ${event.fecha}`}
          pinColor={"#4D418D"}
        ></Marker>
      )}
    </>
  );
};
