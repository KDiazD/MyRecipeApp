import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import {postRequest} from '../../api';
import {guardarIdUsuario} from '../../common';


export default function LoginForm(props) {
  const { setIslogged } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [formulario, setFormulario] = useState({});
  const obtenerCambio = (valor, nombreCampo) => {
    setFormulario({ ...formulario, [nombreCampo]: valor });

  };
  const enviarDatos = async() =>{
    postRequest('usuarios/login', formulario, (respuesta)=>{
      guardarIdUsuario(respuesta?.usuario?.id);
      setIslogged(respuesta?.usuario?.id ? true : false)

    })
  }

  return (
    <View style={styles.formContainer}>
      <Input
        onChangeText={(valor) => obtenerCambio(valor, "username")}
        placeholder="Nombre de Usuario"
        containerStyle={styles.inputForm}
        leftIcon={<Icon type="material-community" name="account" />}
      />

      <Input
        onChangeText={(valor) => obtenerCambio(valor, "password")}
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPassword ? false : true}
        leftIcon={<Icon type="material-community" name="lock" />}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />

      <Button
        title="Inicia sesión"
        onPress={enviarDatos}
        buttonStyle={styles.btnInicio}
        containerStyle={styles.btnContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  btnInicio: {
    backgroundColor: "#265429",
    textAlign: "center",
    fontSize: 16,
    borderRadius: 20,
    marginTop: 20,
  },
  btnContainer: {
    width: "95%",
  },
});
