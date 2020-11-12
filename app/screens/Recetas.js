import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";

import {Icon} from "react-native-elements";
const { width, height } = Dimensions.get("window");

export default function Recetas() {
  const [categorias, setCategorias] = useState(datosCategoria());
    const [showLike, setShowLike] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.containerFavoritos}>
        <Image
          source={item.imagen}
          resizeMode="stretch"
          style={styles.imgLogo}
        />
        <Text style={styles.textcategoria}>{item.nombre}</Text>

        <View style={{flexDirection: "row", marginTop: 15, justifyContent: "space-around", alignItems: "center"}}>
        
            <Icon
              name='thumb-up-outline'
              name={showLike ?  "heart-multiple" : "heart-multiple-outline"}
                onPress={() => setShowLike(!showLike)}
              type='material-community'
              color='#517fa4'/>

            <Icon
              name='comment-outline'
              type='material-community'
              color='#517fa4'
            />
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={categorias}
        renderItem={renderItem}
        style={{ marginTop: 25 }}
        keyExtractor={(item, index) => index.toString()}
      />
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

function datosCategoria() {
  return [

    {
      nombre: "Saludables",
      id: 2,
      imagen: require("../../assets/saludables.jpg"),
      color: "#546A08",
    },
    {
      nombre: "Fitness",
      id: 3,
      imagen: require("../../assets/fitness.jpg"),
      color: "#DC7444",
    },
    {
      nombre: "Gourmet",
      id: 4,
      imagen: require("../../assets/gourmet.jpg"),
      color: "#89DB66",
    },
    {
      nombre: "Snacks",
      id: 5,
      imagen: require("../../assets/snacks.png"),
      color: "#D47C13",
    },
    {
      nombre: "Almuerzos",
      id: 6,
      imagen: require("../../assets/almuerzo.jpg"),
      color: "#60481F",
    },
  ];
}