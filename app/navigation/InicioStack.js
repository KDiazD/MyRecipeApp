import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Inicio from "../screens/Inicio";

const Stack = createStackNavigator();

export default function InicioStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="inicio"
                component={Inicio}
                options={{
                    title:"Inicio",
                    headerStyle: {
                        backgroundColor: '#2127BC',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: "100",
                    }, 
                
                }}
            />
        </Stack.Navigator>
    )
}
