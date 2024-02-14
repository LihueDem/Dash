import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useForm = () => {
  const [formState, setFormState] = useState({});
  const { login } = useContext(AuthContext);
  const onChangeInput = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    //Almacena todos los campos y valores
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  //Submit para el envio de datos
  const handleSubmitLogin = (event) => {
    event.preventDefault();

    login(formState.email);
  };

  return {
    ...formState,
    formState,
    onChangeInput,
    handleSubmitLogin,
  };
};
