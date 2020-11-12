import AsyncStorage from '@react-native-async-storage/async-storage';


export async function obtenerIdUsuario(){
    try {
        const id = await AsyncStorage.getItem('idUsuario');
        return id;
    } catch (error) {
        return null;
    }
}

export async function guardarIdUsuario(idUsuario){
    try {
        await AsyncStorage.setItem('idUsuario', String(idUsuario));
    } catch (error) {
        return null;
    }
}

export async function eliminarIdUUsuario(){
        try {
        await AsyncStorage.setItem('idUsuario', null);
    } catch (error) {
        return null;
    }
}