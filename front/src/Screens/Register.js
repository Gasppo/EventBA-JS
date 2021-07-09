import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthContext } from "../AuthProvider";
import { Centrar } from "../Components/Centrar";

export function Register({ navigation, route }) {
  const { register } = useContext(AuthContext);
  const [email, onChangeEmail] = useState("");
  const [user, onChangeUser] = useState("");
  const [password, onChangePassword] = useState("");
  return (
    <Centrar>
      <Text
        style={{
          textAlign: "left",
          width: 300,
          color: "#4D418D",
          fontSize: 34,
          fontWeight: "bold",
        }}
      >
        ¡Hola!
      </Text>
      <Text
        style={{
          textAlign: "left",
          width: 300,
          color: "#4D418D",
          fontSize: 24,
        }}
      >
        Creá tu usuario
      </Text>
      <View style={{ marginVertical: 20 }}></View>
      <TextInput
        style={styles.inputRegister}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Dirección de Email"
      />
      <TextInput
        style={styles.inputRegister}
        onChangeText={onChangeUser}
        value={user}
        placeholder="Nombre de usuario"
      />
      <TextInput
        style={styles.inputRegister}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      <Text
        style={{
          color: "grey",
          textAlign: "center",
          width: 300,
          marginVertical: 30,
        }}
      >
        {" "}
        By creating an account you agree to our Terms of Service and Privacy
        Policy{" "}
      </Text>
      <TouchableOpacity
        onPress={() => {
          register(user, email, password);
        }}
        style={{
          borderRadius: 20,
          backgroundColor: "#4D418D",
          marginBottom: 60,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginVertical: 10,
            marginHorizontal: 100,
            color: "white",
          }}
        >
          Crear Cuenta
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text
          style={{
            color: "grey",
            textAlign: "center",
            width: 300,
            marginVertical: 30,
          }}
        >
          Volver al menu principal
        </Text>
      </TouchableOpacity>
    </Centrar>
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
});
