import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Cuenta/Login";
import Registro from "../screens/Cuenta/Registro";

const Stack = createStackNavigator();

export default function AuthenticationStack(props){
    const {setIslogged} = props;
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="welcome"
                component={Welcome}
                options={{headerShown:false}}
            />
            <Stack.Screen name="Login" options={{title:"Inicia Sesión"}} >
              {props => <Login {...props} setIslogged={setIslogged} />}
            </Stack.Screen>

            <Stack.Screen
            name="Registro"
            component={Registro}
            options={{title: "Regístrate"}}
        />
        </Stack.Navigator>
    )
}