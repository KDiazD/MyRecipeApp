//Aquí va la lista de recetas por usuarios
import React, { useState, useEffect } from "react";
import { getRequest } from "../api";
import { obtenerIdUsuario } from "../common";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { Icon, Avatar, Button } from "react-native-elements";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

export default function RecetasUsuario(props) {
  const [recetasListUsua, setRecetasListUsua] = useState([]);
  const [showLike, setShowLike] = useState(false);
  const navigation = useNavigation();

  let id_usuario = null;

  const obtenerInfoUsuario = async () => {
    const id_usuario = await obtenerIdUsuario();
    getRequest("usuarios/listar_usuarios/" + id_usuario, (perfil) => {
      setRecetasListUsua(perfil);
    });
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    getRequest("/listar_recetas_usuario/" + id_usuario, (recetasListUsua) => {
      console.log(id_usuario, "entra al get");
      setRecetasListUsua(recetasListUsua.recetasUsua);
    });
    //obtenerInfoUsuario2();
  }, [[isFocused]]);
  const renderItem = ({ item }) => {
    <View style={styles.ViewbtnAdd}>
      <Button
        title="Añade una receta"
        onPress={() => navigation.navigate("AddRecetas")}
        buttonStyle={styles.btnInicio}
        containerStyle={styles.btnContainer}
      />
    </View>;
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

        <View style={styles.ViewbtnAdd}>
          <Button
            title="Editar receta"
            onPress={() => navigation.navigate("EditarRecetas")}
            buttonStyle={styles.btnInicio}
            containerStyle={styles.btnContainer}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.containerFavoritos}>
      <FlatList
        data={recetasListUsua}
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
  ViewbtnAdd: { alignItems: "flex-end", justifyContent: "center", padding: 30 },
});
