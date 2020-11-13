import React, { useState, useEffect } from "react";
import { getRequest } from "../api";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("window"); // capturo las dimensiones del dispositivo donde se esta ejecutando la app
import { useNavigation } from "@react-navigation/native";

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Recetas", { id_categorias: item.id })
        }
      >
        <View style={styles.containercategoria}>
          <Image
            source={{ uri: item.imagen }}
            resizeMode="stretch"
            style={styles.imgLogo}
          />

          <View style={[styles.overlay1, { backgroundColor: item.color }]} />

          <View style={styles.containertext}>
            <Text style={styles.textcategoria}>{item.categorias}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getRequest("recetas/listar_categorias", (categorias) => {
      setCategorias(categorias); /// KARLAAAAAAAAAAAAAAAAAAAAAA K ACA ESTOY, HAY REU FAMILIAR XDDDD, pero yo sigo viendo el pc que archivo era me
    });
  }, []);

  return (
    <View>
      <FlatList
        data={categorias}
        renderItem={renderItem}
        numColumns={2}
        style={{ marginTop: 25 }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containercategoria: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 4,
    justifyContent: "center",
  },
  imgLogo: {
    width: width / 2.1,
    height: width / 2.1,
  },

  overlay1: {
    opacity: 0.6,
    width: width / 2.1,
    height: width / 2.1,
    position: "absolute",
  },
  containertext: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  textcategoria: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
});
