import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "../screens/Inicio";
import Perfil from "../screens/Cuenta/Perfil";

const Stack = createStackNavigator();

export default function InicioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="inicio"
        component={Inicio}
        options={{
          title: "Inicio",
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
              <Icon type="material-community" name="pencil" color="#fff" />
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
    </Stack.Navigator>
  );
}
