import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Colecciones from "../screens/Colecciones";

const Stack = createStackNavigator();

export default function ColeccionesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="colecciones"
                component={Colecciones}
                options={{title:"Colecciones"}}
            />
        </Stack.Navigator>
    )
}