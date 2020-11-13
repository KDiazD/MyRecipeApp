import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Input, Icon, Button, Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function EditarRecetas() {
  return (
    <ScrollView>
      <Image
        source={require("../../assets/MyRecipes.png")}
        resizeMode="contain"
        style={styles.logo}
      />

      <View style={styles.viewContainer}>
        <Divider style={styles.divider} />
        <Text style={styles.textcategoria}> Edita tú receta</Text>
      </View>
      <View style={styles.formContainer}>
        <Input
          placeholder="Título de la receta"
          containerStyle={styles.inputForm}
          leftIcon={<Icon type="material-community" name="format-title" />}
        />
        <Input
          placeholder="Elaboración"
          containerStyle={styles.inputForm}
          leftIcon={<Icon type="material-community" name="bowl" />}
        />
        <Input
          placeholder="Observaciones"
          containerStyle={styles.inputForm}
          leftIcon={<Icon type="material-community" name="card-text" />}
        />
        <Input
          placeholder="Ingredientes"
          containerStyle={styles.inputForm}
          leftIcon={<Icon type="material-community" name="silverware-clean" />}
        />
        <Input
          placeholder="Imagen"
          containerStyle={styles.inputForm}
          leftIcon={<Icon type="material-community" name="image-plus" />}
        />

        <Button
          title="Editar"
          buttonStyle={styles.btnRegister}
          containerStyle={styles.btnContainer}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  ViewbtnAdd: {
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 30,
  },
  btnInicio: {
    backgroundColor: "#265429",
    textAlign: "center",
    fontSize: 16,
    borderRadius: 20,
    marginTop: 20,
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 10,
  },
  btnRegister: {
    backgroundColor: "#265429",
    textAlign: "center",
    fontSize: 16,
    borderRadius: 20,
    marginTop: 20,
  },
  btnContainer: {
    width: "95%",
  },
  logo: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40,
    marginTop: 10,
  },
  textcategoria: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
