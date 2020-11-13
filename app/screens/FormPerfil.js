import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Input, Icon, Button, Divider } from "react-native-elements";
import { obtenerIdUsuario } from "../common";
import { putRequest, getRequest } from "../api";

export default function FormPerfil() {
  const [formulario, setFormulario] = useState({
    username: "",
    nombre: "",
    descripcion: "",
    email: "",
    imagen: "",
  });
  let id_usuario = null;
  const obtenerCambio = (valor, nombreCampo) => {
    setFormulario({ ...formulario, [nombreCampo]: valor });
  };

  const obtenerInfoUsuario = async () => {
    obtenerIdUsuario().then((id) => {
      getRequest("usuarios/listar_usuarios/" + id, (perfil) => {
        setFormulario(perfil);
      });
    });
  };

  const modificarDatos = () => {
    obtenerIdUsuario().then((id) => {
      putRequest("usuarios/editar_usuarios/" + id, formulario, (perfil) => {});
    });
  };

  useEffect(() => {
    obtenerInfoUsuario();
  }, []);
  return (
    <ScrollView>
      <Image
        source={require("../../assets/MyRecipes.png")}
        resizeMode="contain"
        style={styles.logo}
      />

      <View style={styles.viewContainer}>
        <Divider style={styles.divider} />
        <Text style={styles.textcategoria}> Edita los datos de tu cuenta</Text>
      </View>
      <View style={styles.formContainer}>
        <Input
          onChangeText={(valor) => obtenerCambio(valor, "username")}
          value={formulario.username}
          placeholder="Nick de Usuario"
          containerStyle={styles.inputForm}
          leftIcon={<Icon type="material-community" name="account" />}
        />
        <Input
          onChangeText={(valor) => obtenerCambio(valor, "nombre")}
          value={formulario.nombre}
          placeholder="Nombre"
          containerStyle={styles.inputForm}
          leftIcon={<Icon type="material-community" name="account-settings" />}
        />
        <Input
          onChangeText={(valor) => obtenerCambio(valor, "email")}
          value={formulario.email}
          placeholder="Correo Electrónico"
          containerStyle={styles.inputForm}
          leftIcon={<Icon type="material-community" name="email" />}
        />
        <Input
          onChangeText={(valor) => obtenerCambio(valor, "imagen")}
          value={formulario.imagen}
          placeholder="Imagen"
          containerStyle={styles.inputForm}
          leftIcon={<Icon type="material-community" name="image-plus" />}
        />
        <Input
          onChangeText={(valor) => obtenerCambio(valor, "descripcion")}
          value={formulario.descripcion}
          placeholder="Descripción"
          containerStyle={styles.inputForm}
          leftIcon={<Icon type="material-community" name="card-text" />}
        />

        <Button
          title="Editar"
          buttonStyle={styles.btnRegister}
          onPress={modificarDatos}
          containerStyle={styles.btnContainer}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ViewbtnAdd: {
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 30,
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
