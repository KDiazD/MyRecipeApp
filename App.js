import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import Navigation from "./app/navigation/Navigation";
import { obtenerIdUsuario } from './app/common';

export default function App() {
  const [islogged, setIslogged] = useState(false);


    useEffect(() => {
      async function obtenerId(){
      const id = await obtenerIdUsuario();
        setIslogged(id ? true : false)
      }

      obtenerId()

    }, [])

  return <Navigation islogged={islogged} setIslogged={setIslogged} />;
}
