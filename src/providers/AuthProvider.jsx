import React from "react";
import { useReducer } from "react";
import { AuthReducer } from "../Reducer/AuthReducer.js";
import { AuthContext } from "../context/AuthContext.jsx";

const initialValues = {
  user: {},
  isLogged: false,
  token: "",
  message: "",
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialValues);

  const login = (email) => {
    //Validacion de ingreso. Chequea en la db que el usuario este ingresado
    if (email == "lihue.demelchiorre@gmail.com") {
      dispatch({
        type: "LOGIN",
        payload: {
          user: { name: "Lihue", lastname: "Dem", age: "29" },
          isLogged: true,
          token: "nofiasehjfa{oisefa",
          msg: "Usuario logueado con exito",
        },
      });
    }
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: {
        msg: "user desconectado!",
      },
    });
  };

  return (
    //Instancia el contexto dentro del proveedor y permite que los estados de useReducer sean globales
    <AuthContext.Provider
      value={{
        //hace global los estados
        state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
