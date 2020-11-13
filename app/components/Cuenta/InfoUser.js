import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar, Divider, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { obtenerIdUsuario } from "../../common";
import { getRequest } from "../../api";
import { useIsFocused } from "@react-navigation/native";

export default function InfoUser(props) {
  const [perfil, setPerfil] = useState([]);
  const navigation = useNavigation();
  const obtenerInfoUsuario = async () => {
    const id_usuario = await obtenerIdUsuario();
    getRequest("usuarios/listar_usuarios/" + id_usuario, (perfil) => {
      setPerfil(perfil);
    });
  };
  const isFocused = useIsFocused();

  useEffect(() => {
    obtenerInfoUsuario();
  }, [isFocused]);
  return (
    <ScrollView>
      <View>
        <View style={styles.ViewHeader}>
          <View style={styles.ViewUserInfo}>
            <Avatar
              rounded
              size="xlarge"
              containerStyle={styles.userInfoAvatar}
              source={{ uri: perfil.imagen }}
            />
          </View>
          <View style={styles.ViewTxt}>
            <Text style={styles.txtUsua}>@{perfil.username}</Text>
          </View>
        </View>
        <View style={styles.ViewtxtName}>
          <Text style={styles.txtName}>{perfil.nombre}</Text>
          <Text style={styles.txtPerfil}>{perfil.descripcion}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            textAlign: "center",
            width: "95%",
            marginTop: "10%",
          }}
        >
          <View style={{ borderRightWidth: 1, paddingRight: 10 }}>
            <Text style={{ textAlign: "center" }}>Recetas</Text>
            <Text style={{ textAlign: "center" }}>{perfil.recetas}</Text>
          </View>
          <View>
            <Text style={{ textAlign: "center" }}>Seguidores </Text>
            <Text style={{ textAlign: "center" }}>{perfil.seguidores}</Text>
          </View>
          <View style={{ borderLeftWidth: 1, paddingLeft: 10 }}>
            <Text style={{ textAlign: "center" }}>Siguiendo</Text>
            <Text style={{ textAlign: "center" }}>{perfil.seguidos}</Text>
          </View>
        </View>
        <View style={styles.ViewbtnAdd}>
          <Button
            title="Mis recetas"
            onPress={() => navigation.navigate("RecetasUsuario")}
            buttonStyle={styles.btnInicio}
            containerStyle={styles.btnContainer}
          />
          <Button
            title="Añade una receta"
            onPress={() => navigation.navigate("AddRecetas")}
            buttonStyle={styles.btnInicio}
            containerStyle={styles.btnContainer}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ViewHeader: {
    backgroundColor: "#2D3D8F",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    height: "25%",
  },
  ViewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
    marginTop: 280,
  },
  ViewTxt: {
    marginTop: 85,
  },
  txtUsua: {
    textAlign: "left",
    color: "#767676",
  },
  ViewtxtName: {
    marginStart: 10,
    marginTop: 130,
  },
  txtName: {
    fontWeight: "bold",
    fontSize: 20,
  },
  txtPerfil: {
    fontSize: 13,
    marginTop: 15,
  },
  ViewbtnAdd: { alignItems: "flex-end", justifyContent: "center", padding: 30 },
  btnInicio: {
    backgroundColor: "#265429",
    textAlign: "center",
    fontSize: 16,
    borderRadius: 20,
    marginTop: 20,
  },
});
