import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import RegisterForm from "../../components/Cuenta/RegisterForm";

export default function Registro(){
    return(
        
        <KeyboardAwareScrollView>
            <Image 
                source={require("../../../assets/MyRecipes.png")}
                resizeMode="contain"
                style={styles.logo}/>
                
                <View style={styles.viewContainer}>
                <RegisterForm />
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    logo:{
        width: "100%",
        height: 200,
        marginTop: 20
    },
    viewContainer:{
        marginRight: 40,
        marginLeft: 40
    }
})