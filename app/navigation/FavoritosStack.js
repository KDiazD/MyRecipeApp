import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Favoritos from "../screens/Favoritos";

const Stack = createStackNavigator();

export default function FavoritosStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="favoritos"
                component={Favoritos}
                options={{
                    title:"Favoritos",
                    headerStyle: {
                        backgroundColor: '#2127BC',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: "100",
                    }
                }}
            />
        </Stack.Navigator>
    )
}