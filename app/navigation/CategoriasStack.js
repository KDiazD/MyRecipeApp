import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Categorias from "../screens/Categorias";
import Recetas from "../screens/Recetas";

const Stack = createStackNavigator();

export default function CategoriasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="categorias"
        component={Categorias}
        options={{
          title: "Categorias",
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
        name="Recetas"
        component={Recetas}
        options={{
          title: "Recetas por Categoria",
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
