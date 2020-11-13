import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar, ListItem, Avatar } from "react-native-elements";
import { getRequest } from "../api";

import { useNavigation } from "@react-navigation/native";

export default function Buscador() {
  const [recetas, setRecetas] = useState([]);
  const [busqueda, setbusqueda] = useState("");
  const navigation = useNavigation();
  const obtenerCambio = (valor) => {
    setbusqueda(valor);
    getRequest("recetas/buscador/" + valor, (resultado) => {
      setRecetas(resultado.buscador);
    });
  };
  const renderItem = ({ item }) => {
    return (
      <View>
        <ListItem
          onPress={() => navigation.navigate("RecetasInd", { id: item.id })}
        >
          <Avatar source={{ uri: item.imagen }} />
          <ListItem.Content>
            <ListItem.Title>{item.titulo}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <SearchBar
        placeholder="Buscar"
        lightTheme
        platform="android"
        value={busqueda}
        onChangeText={obtenerCambio}
      />
      <FlatList
        data={recetas}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  txtRta: {
    textAlign: "center",
  },
});
