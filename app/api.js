import { api } from "./global";
import { Alert } from "react-native";

/**
 *  Metodo usado para hacer peticiones get
 * @param ruta ruta a la cual apuntar
 * @param callback funcion a ejecutar despues de que termine la peticion
 */
export async function getRequest(ruta, callback) {
  const header = {
    method: "GET",
    headers: {},
  };
  await request(ruta, header, callback);
}

export async function postRequest(ruta, data, callback) {
  const header = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
  await request(ruta, header, callback);
}

export async function putRequest(ruta, data, callback) {
  const header = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
  };
  await request(ruta, header, callback);
}

async function request(ruta, header, callback) {
  try {
    const response = await fetch(api + ruta, header);
    const responseJson = await response.json();
    responseJson.message &&
      Alert.alert("Mensaje del Sistema", responseJson.message);
    await callback(responseJson);
  } catch (error) {
    console.log(error);
  }
}
