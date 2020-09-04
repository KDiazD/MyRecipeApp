import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "react-native-elements";
export default function Buscador() {
  return (
    <SafeAreaView>
      <SearchBar placeholder="Buscar" lightTheme platform="android" />
      <Text style={styles.txtRta}>No se encontraron resultados</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  txtRta: {
    textAlign: "center",
  },
});
