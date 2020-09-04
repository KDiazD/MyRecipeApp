import React, { useState } from "react";
import { Text, View, StyleSheet, Image, FlatList, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");



export default function Favoritos() {
    const [categorias, setCategorias] = useState(datosCategoria());

    const renderItem = ({ item }) => {
        return (
            <View style={styles.containerFavoritos}>

                <Image
                    source={item.imagen}
                    resizeMode="stretch"
                    style={styles.imgLogo}
                />

                <Text style={styles.textcategoria}>{item.nombre}</Text>
            </View>
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
                ListHeaderComponent={(
                    <View style={styles.containerFavoritos}>

                        <Image
                            source={require("../../assets/veganas.jpeg")}
                            resizeMode="stretch"
                            style={styles.imgLogo}
                        />

                        <Text style={styles.textcategoria}>Ensalada Vegana</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerFavoritos: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 4,
        justifyContent: 'center',
        flexDirection: "column",
        alignItems: "center",
        borderWidth: 1
    },
    imgLogo: {
        width: width / 2.5,
        height: width / 2.5,
        alignContent: "center"
    },


    textcategoria: {
        color: "black",
        fontWeight: "200",
        fontSize: 15,
        textAlign: "center"
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