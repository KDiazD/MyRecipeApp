import  React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Perfil from "../screens/Perfil";
import Inicio from "../screens/Inicio";
import Buscador from "../screens/Buscador";
import Categorias from "../screens/Categorias";
import Favoritos from "../screens/Favoritos";


const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="inicio" component={Inicio} />
        <Drawer.Screen name="buscador" component={Buscador} />
        <Drawer.Screen name="categorias" component={Categorias} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}