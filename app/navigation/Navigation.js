import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';




import PerfilStack from "./PerfilStack";
import InicioStack from "./InicioStack";
import BuscadorStack from "./BuscadorStack";
import CategoriasStack from "./CategoriasStack";
import ColeccionesStack from "./ColeccionesStack";
import FavoritosStack from "./FavoritosStack";
import AuthenticationStack from "./AuthenticationStack";

const Drawer = createDrawerNavigator();

export default function Navigation(props) {
  const { islogged } = props;
  return (
    <SafeAreaProvider >
      <NavigationContainer>
        {islogged ? (
          <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={InicioStack} />
            <Drawer.Screen name="Perfil" component={PerfilStack} />
            <Drawer.Screen name="Buscador" component={BuscadorStack} />
            <Drawer.Screen name="Categorias" component={CategoriasStack} />
            <Drawer.Screen name="Colecciones" component={ColeccionesStack} />
            <Drawer.Screen name="Favoritos" component={FavoritosStack} />

          </Drawer.Navigator>

        ) : (
            <AuthenticationStack />
          )}

      </NavigationContainer>
    </SafeAreaProvider>

  );
}