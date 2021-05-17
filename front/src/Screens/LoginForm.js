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
export function LoginForm({ navigation, route }) {
  const { login } = useContext(AuthContext);
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  return (
    <Centrar>
      <Text
        style={{
          textAlign: "left",
          color: "#4D418D",
          fontSize: 34,
          fontWeight: "900",
        }}
      >
        EventBA
      </Text>
      <Text
        style={{
          textAlign: "left",
          color: "#4D418D",
          fontSize: 24,
        }}
      >
        ¡Bienvenido!
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
        onChangeText={onChangePassword}
        value={password}
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <Text
          style={{
            color: "grey",
            textAlign: "center",
            width: 300,
            marginVertical: 30,
          }}
        >
          Olvidó su contraseña? Click aqui!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          login(email, password);
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
          Iniciar Session
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
