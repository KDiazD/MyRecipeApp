import React, { useState, useEffect } from "react";
import { getRequest } from '../api';
import { Text, View, StyleSheet, Image, FlatList, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default function Colecciones() {
    const [colecciones, setColecciones] = useState([]);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.containercategoria}>
                <Image
                    source={{uri:item.imagen}}
                    resizeMode="stretch"
                    style={styles.imgLogo}
                />
                <View style={[styles.overlay1, { backgroundColor: item.color }]} />


                <View style={styles.containertext}>
                    <Text style={styles.textcategoria}>{item.colecciones}</Text>
                </View>

            </View >
        )
    };

    useEffect(() => {
    getRequest('recetas/listar_colecciones', (colecciones) =>{
      console.log(colecciones); // hello
      setColecciones(colecciones);
    } )
  }, []);
    return (
        <View>
            <FlatList
                data={colecciones}
                renderItem={renderItem}
                numColumns={2}
                style={{ marginTop: 25 }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containercategoria: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 4,
        justifyContent: 'center',
    },
    imgLogo: {
        width: width / 2.1,
        height: width / 2.1,
    },

    overlay1: {
        opacity: 0.6,
        width: width / 2.1,
        height: width / 2.1,
        position: 'absolute'

    },
    containertext: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' },
    textcategoria: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25
    },




})

