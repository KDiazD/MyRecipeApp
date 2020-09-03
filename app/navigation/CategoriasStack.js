import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Categorias from "../screens/Categorias";

const Stack = createStackNavigator();

export default function CategoriasStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="categorias"
                component={Categorias}
                options={{title:"Categorias"}}
            />
        </Stack.Navigator>
    )
}