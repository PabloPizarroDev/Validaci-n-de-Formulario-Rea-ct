import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ComponenteInput from "../components/ComponenteInput";

import {
  Boton,
  ContenedorBotonCentrado,
  Formulario,
  MensajeError,
} from "../styles/Formularios";
import Form from "./CrearUsuario";

const Home = () => {
  const [usuario, setUsuario] = useState({ campo: "", valido: null });
  const [password, setPassword] = useState({ campo: "", valido: null });
  const [formularioValido, setFormularioValido] = useState(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    password: /^.{4,12}$/, // 4 a 12 digitos.
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (usuario.valido === "true" && password.valido === "true") {
      setFormularioValido(true);
      setUsuario({ campo: "", valido: null });
      setPassword({ campo: "", valido: null });
    } else {
      setFormularioValido(false);
    }
  };

  return (
    <div>
      <h1>Tramites del Consulado</h1>
      <Formulario action="" onSubmit={onSubmit}>
        <ComponenteInput
          estado={usuario}
          cambiarEstado={setUsuario}
          tipo="text"
          label="Usuario"
          placeholder="Pablo1234"
          name="usuario"
          leyendaError="El usuario tiene que ser de 4 a 16 digitos y solo puede contener números, letras y guión bajo"
          expresionRegular={expresiones.usuario}
          required
        />
        <ComponenteInput
          estado={password}
          cambiarEstado={setPassword}
          tipo="password"
          label="Contraseña"
          name="password1"
          leyendaError="La contraseña tiene que ser de 4 a 12 digitos."
          expresionRegular={expresiones.password}
          required
        />
        {formularioValido === false && (
          <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b> Por favor rellena el formulario correctamente.
            </p>
            <p>
              Si no tienes una cuenta realizada crea una
              <Link to="/crearcuenta">cuenta nueva</Link>
            </p>
          </MensajeError>
        )}
        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          {formularioValido === true && <Form />}
        </ContenedorBotonCentrado>
      </Formulario>
      <p>Si no tienes una cuenta realizada crea una cuenta nueva</p>
      <Link to="/crearcuenta">Click Aquí</Link>
    </div>
  );
};

export default Home;
