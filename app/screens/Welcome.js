import React from "react";
import { StyleSheet, ImageBackground, View, Text } from "react-native";
import { Button } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <ImageBackground
          source={require("../../assets/fondo.jpg")}
          style={styles.imgBackground}
          resizeMode="cover"
        />
        <View style={[styles.overlay]}>
          <Text style={styles.txtWelcome}>BIENVENIDOS</Text>
          <View style={styles.Viewbtn}>
            <Button
              buttonStyle={styles.btnIniciar}
              containerStyle={styles.btnContainer}
              title="Iniciar sesión"
              onPress={() => navigation.navigate("Login")}
            ></Button>
          </View>
          <View style={styles.ViewbtnRegistro}>
            <Button
              buttonStyle={styles.btnRegistro}
              containerStyle={styles.btnContainer}
              title="Regístrate"
              onPress={() => navigation.navigate("Registro")}
            ></Button>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    position: "absolute",
    top: 0,
    opacity: 0.7,
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  txtWelcome: {
    flex: 1,
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    height: 40,
    top: 250,
    textAlign: "center",
  },
  Viewbtn: {
    flex: 1,
    top: 250,
    alignItems: "center",
    alignContent: "center",
  },
  btnIniciar: {
    backgroundColor: "#202051",
    textAlign: "center",
    fontSize: 16,
    height: "50%",
    borderRadius: 40,
  },
  btnContainer: {
    width: "80%",
  },
  ViewbtnRegistro: {
    flex: 1,
    top: 80,
    alignItems: "center",
    alignContent: "center",
  },
  btnRegistro: {
    backgroundColor: "#571544",
    color: "black",
    textAlign: "center",
    fontSize: 16,
    height: "50%",
    borderRadius: 40,
  },
  /*btnContainer2:{
            width:"80%"
        }*/
});
