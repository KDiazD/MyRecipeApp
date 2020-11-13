import React, { useState, useEffect } from "react";
import { getRequest } from "../api";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";

import { Icon, Avatar } from "react-native-elements";
const { width, height } = Dimensions.get("window");

export default function RecetasInd(props) {
  const [recetas, setRecetas] = useState([]);
  const [showLike, setShowLike] = useState(false);
  const {
    route: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    getRequest("recetas/listar_recetas/" + id, (recetas) => {
      setRecetas(recetas);
    });
  }, []);

  const meGusta = () => {
    /// peticion
    // envia el id de la receta
    // obtenerUsuarioId
  };

  return (
    <View style={styles.containerFavoritos}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          textAlign: "center",
          marginLeft: -50,
          width: "95%",
          marginTop: "10%",
        }}
      >
        <Avatar
          rounded
          size="medium"
          containerStyle={styles.userInfoAvatar}
          source={{ uri: recetas.foto }}
        />
        <Text style={styles.txtnombre}>{recetas.nombre}</Text>
      </View>
      <View>
        <Image
          source={{ uri: recetas.imagen }}
          resizeMode="stretch"
          style={styles.imgLogo}
        />
        <Text style={styles.textcategoria}>{recetas.titulo}</Text>
        <Text style={styles.txtTitulo}>Ingredientes</Text>
        <Text style={styles.txtTexto}>{recetas.ingredientes}</Text>
        <Text style={styles.txtTitulo}>Preparación</Text>
        <Text style={styles.txtText}>{recetas.observaciones}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          justifyContent: "space-evenly",
          width: "50%",
        }}
      >
        <Icon
          name="thumb-up-outline"
          name={showLike ? "heart-multiple" : "heart-multiple-outline"}
          onPress={() => setShowLike(!showLike)}
          type="material-community"
          color="#517fa4"
        />

        <Icon
          name="comment-outline"
          type="material-community"
          color="#517fa4"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerFavoritos: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  imgLogo: {
    width: width / 1.5,
    height: width / 1.5,
    alignContent: "center",
    marginTop: 20,
  },
  txtTexto: {
    color: "black",
    fontSize: 12,
  },
  txtTitulo: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  txtnombre: {
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
    marginStart: -50,
    marginTop: 10,
    fontSize: 20,
  },

  textcategoria: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
});
