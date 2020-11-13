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
import { useNavigation } from "@react-navigation/native";

export default function Inicio() {
  const [recetasList, setRecetasList] = useState([]);
  const [showLike, setShowLike] = useState(false);
  const navigation = useNavigation();

  const meGusta = () => {
    /// peticion
    // envia el id de la receta
    // obtenerUsuarioId
  };

  const renderItem = ({ item }) => {
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
          <Avatar rounded size="medium" source={{ uri: item.foto }} />
          <Text
            style={styles.txtnombre}
            onPress={() => navigation.navigate("Perfil", { id: item.id })}
          >
            {item.nombre}
          </Text>
        </View>
        <View>
          <Image
            source={{ uri: item.imagen }}
            resizeMode="stretch"
            style={styles.imgLogo}
          />
          <Text style={styles.textcategoria}>{item.titulo}</Text>
          <Text style={styles.txtTitulo}>Ingredientes</Text>
          <Text style={styles.txtTexto}>{item.ingredientes}</Text>
          <Text style={styles.txtTitulo}>Preparación</Text>
          <Text style={styles.txtText}>{item.observaciones}</Text>
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
  };
  useEffect(() => {
    getRequest("recetas/listar_recetas", (recetasList) => {
      setRecetasList(recetasList.recetas);
    });
  }, []);
  return (
    <View style={styles.containerFavoritos}>
      <FlatList
        data={recetasList}
        renderItem={renderItem}
        numColumns={1}
        style={{ marginTop: 25 }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerFavoritos: {
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
