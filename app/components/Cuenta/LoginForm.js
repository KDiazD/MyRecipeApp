import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Input, Icon, Button} from "react-native-elements";

export default function LoginForm(){
    const [showPassword, setShowPassword] = useState(false);
    return(
        <View style={styles.formContainer}>
             <Input
                placeholder="Nombre de Usuario"
                containerStyle={styles.inputForm}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="account"
                    />
                }
            />
            
            <Input
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                password = {true}
                secureTextEntry = {showPassword ? false : true}
               leftIcon={
                    <Icon
                        type="material-community"
                        name="lock"
                    />
                }
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ?"eye-off-outline" : "eye-outline"}
                        
                        
                        onPress={()=>setShowPassword(!showPassword)}
                    />
                }
                
            />

            <Button
                title="Inicia sesión"
                buttonStyle={styles.btnInicio} 
                containerStyle={styles.btnContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop:30
    },
    inputForm:{
        width:"100%",
        marginTop: 10
    },
    btnInicio:{
        backgroundColor: "#265429",
        textAlign: "center",
        fontSize: 16,
        borderRadius:20,
        marginTop: 20
    },
    btnContainer:{
        width:"95%"
    }
}) 