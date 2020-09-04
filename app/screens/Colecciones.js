import React, { useState } from "react";
import { Text, View, StyleSheet, Image, FlatList, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default function Colecciones() {
    const [categorias, setCategorias] = useState(datosCategoria());

    const renderItem = ({ item }) => {
        return (
            <View style={styles.containercategoria}>
                <Image
                    source={item.imagen}
                    resizeMode="stretch"
                    style={styles.imgLogo}
                />
                <View style={[styles.overlay1, { backgroundColor: item.color }]} />


                <View style={styles.containertext}>
                    <Text style={styles.textcategoria}>{item.nombre}</Text>
                </View>

            </View >
        )
    }
    return (
        <View>
            <FlatList
                data={categorias}
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



function datosCategoria() {
    return [
        {
            nombre: 'Veganas',
            id: 1,
            imagen: require("../../assets/veganas.jpeg"),
            color: '#A49D24'
        },
        {
            nombre: 'Saludables',
            id: 2,
            imagen: require("../../assets/saludables.jpg"),
            color: '#546A08'
        },
        {
            nombre: 'Fitness',
            id: 3,
            imagen: require("../../assets/fitness.jpg"),
            color: '#DC7444'
        },
        {
            nombre: 'Gourmet',
            id: 4,
            imagen: require("../../assets/gourmet.jpg"),
            color: '#89DB66'
        },
        {
            nombre: 'Snacks',
            id: 5,
            imagen: require("../../assets/snacks.png"),
            color: '#D47C13'
        },
        {
            nombre: 'Almuerzos',
            id: 6,
            imagen: require("../../assets/almuerzo.jpg"),
            color: '#60481F'
        }
    ];

}
