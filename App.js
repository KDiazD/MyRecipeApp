import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  Text, View } from 'react-native';

import Navigation from "./app/navigation/Navigation";

export default function App() {
  const[islogged, setIslogged] = useState(true);

  return <Navigation islogged = {islogged}/>
}


