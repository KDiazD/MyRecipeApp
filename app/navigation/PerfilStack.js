import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Icon} from "react-native-elements";
import {StyleSheet, View} from "react-native";
import { eliminarIdUUsuario } from '../common';
import Perfil from "../screens/Cuenta/Perfil";

const Stack = createStackNavigator();

export default function PerfilStack(props){
    const { setIslogged } = props;

    const cerrarSesion =()=>{
        eliminarIdUUsuario();
        setIslogged(false);
    }

    return(
        <Stack.Navigator>
            <Stack.Screen
                name="perfil"
                component={Perfil}
                options={{
                    title:"Perfil",
                    headerStyle: {
                        backgroundColor: '#2127BC',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: "100",
                    },
                    headerRight: () => (
                        <View style={styles.Viewbtnnav}>
                            <Icon type="material-community" name="pencil" color="#fff"/>
                            <Icon type="material-community" name="exit-to-app" color="#fff" marginLeft={10} onPress={cerrarSesion}/>
                        </View>
                    ),
                }}
            />

        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    Viewbtnnav:{
        flexDirection: "row", 
        marginRight: 10,
    }
});
