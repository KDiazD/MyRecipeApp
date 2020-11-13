import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colecciones from "../screens/Colecciones";
import RecetasColec from "../screens/RecetasColec";

const Stack = createStackNavigator();

export default function ColeccionesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="colecciones"
        component={Colecciones}
        options={{
          title: "Colecciones",
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
        name="Recetas_Coleccion"
        component={RecetasColec}
        options={{
          title: "Recetas por Colección",
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
