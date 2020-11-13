import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Buscador from "../screens/Buscador";
import RecetasInd from "../screens/RecetasInd";

const Stack = createStackNavigator();

export default function BuscadorStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="buscador"
        component={Buscador}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RecetasInd"
        component={RecetasInd}
        options={{
          title: "",
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
