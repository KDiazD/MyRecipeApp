import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { eliminarIdUUsuario } from "../common";
import Perfil from "../screens/Cuenta/Perfil";
import FormPerfil from "../screens/FormPerfil";
import AddRecetas from "../screens/AddRecetas";
import RecetasUsuario from "../screens/RecetasUsuario";
import EditarRecetas from "../screens/EditarRecetas";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function PerfilStack(props) {
  const { setIslogged } = props;

  const navigation = useNavigation();

  const cerrarSesion = () => {
    eliminarIdUUsuario();
    setIslogged(false);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="perfil"
        component={Perfil}
        options={{
          title: "Perfil",
          headerStyle: {
            backgroundColor: "#2127BC",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "100",
          },
          headerRight: () => (
            <View style={styles.Viewbtnnav}>
              <Icon
                type="material-community"
                name="pencil"
                color="#fff"
                onPress={() => navigation.navigate("FormPerfil")}
              />
              <Icon
                type="material-community"
                name="exit-to-app"
                color="#fff"
                marginLeft={10}
                onPress={cerrarSesion}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="FormPerfil"
        component={FormPerfil}
        options={{
          title: "Editar",
          headerStyle: {
            backgroundColor: "#2127BC",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "100",
          },
        }}
      />
      <Stack.Screen
        name="AddRecetas"
        component={AddRecetas}
        options={{
          title: "Añadir Recetas",
          headerStyle: {
            backgroundColor: "#2127BC",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "100",
          },
        }}
      />
      <Stack.Screen
        name="RecetasUsuario"
        component={RecetasUsuario}
        options={{
          title: "Tús recetas",
          headerStyle: {
            backgroundColor: "#2127BC",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "100",
          },
        }}
      />
      <Stack.Screen
        name="EditarRecetas"
        component={EditarRecetas}
        options={{
          title: "Edita tu receta",
          headerStyle: {
            backgroundColor: "#2127BC",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "100",
          },
        }}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  Viewbtnnav: {
    flexDirection: "row",
    marginRight: 10,
  },
});
