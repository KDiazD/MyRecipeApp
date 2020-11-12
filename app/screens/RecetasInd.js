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

import { Icon } from "react-native-elements";
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
      console.log(recetas); // hello
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
      <Text style={styles.textcategoria}>{recetas.nombre}</Text>
      <Image
        source={{ uri: recetas.imagen }}
        resizeMode="stretch"
        style={styles.imgLogo}
      />
      <Text style={styles.textcategoria}>{recetas.titulo}</Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          justifyContent: "space-around",
          alignItems: "center",
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
  },

  textcategoria: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
});
