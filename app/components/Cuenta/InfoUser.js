import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar, Divider } from "react-native-elements";

export default function InfoUser() {
  return (
    <ScrollView>
      <View>
        <View style={styles.ViewHeader}>
          <View style={styles.ViewUserInfo}>
            <Avatar
              rounded
              size="xlarge"
              containerStyle={styles.userInfoAvatar}
              source={require("../../../assets/userImage.png")}
            />
          </View>
          <View style={styles.ViewTxt}>
            <Text style={styles.txtUsua}>@KarlaDiazD</Text>
          </View>
        </View>
        <View style={styles.ViewtxtName}>
          <Text style={styles.txtName}>Karla Díaz Donato</Text>
          <Text style={styles.txtPerfil}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            textAlign: "center",
            width: "95%",
            marginTop: "10%",
          }}
        >
          <View style={{ borderRightWidth: 1, paddingRight: 10 }}>
            <Text style={{ textAlign: "center" }}>Recetas</Text>
            <Text style={{ textAlign: "center" }}>4</Text>
          </View>
          <View>
            <Text style={{ textAlign: "center" }}>Seguidores </Text>
            <Text style={{ textAlign: "center" }}>100</Text>
          </View>
          <View style={{ borderLeftWidth: 1, paddingLeft: 10 }}>
            <Text style={{ textAlign: "center" }}>Siguiendo</Text>
            <Text style={{ textAlign: "center" }}>400</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  ViewHeader: {
    backgroundColor: "#2D3D8F",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    height: "25%",
  },
  ViewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
    marginTop: 280,
  },
  ViewTxt: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 75,
  },
  txtUsua: {
    textAlign: "center",
    color: "#767676",
  },
  ViewtxtName: {
    marginStart: 10,
    marginTop: 120,
  },
  txtName: {
    fontWeight: "bold",
    fontSize: 20,
  },
  txtPerfil: {
    fontSize: 13,
    marginTop: 15,
  },
});
