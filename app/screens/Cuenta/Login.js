import React from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import LoginForm from "../../components/Cuenta/LoginForm";

export default function Login(props) {
  const { setIslogged } = props;
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/MyRecipes.png")}
        resizeMode="contain"
        style={styles.logo}
      />

      <View style={styles.viewContainer}>
        <Divider style={styles.divider} />
        <LoginForm  setIslogged={setIslogged} />
        <CreaCuenta />
      </View>
    </ScrollView>
  );
}

function CreaCuenta() {
  const navigation = useNavigation();

  return (
    <Text style={styles.TxtRegistro}>
      ¿No tienes una cuenta?
      <Text
        style={styles.btnRegistro}
        onPress={() => navigation.navigate("Registro")}
      >
        ¡Regístrate!
      </Text>
    </Text>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: -40,
  },
  TxtRegistro: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
  },
  btnRegistro: {
    color: "#00a680",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40,
    marginTop: 10,
  },
});
