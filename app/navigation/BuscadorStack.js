import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Buscador from "../screens/Buscador";

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
        </Stack.Navigator>
    )
}