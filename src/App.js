import React, { useState } from "react";
import {
  Boton,
  ContenedorBotonCentrado,
  ContenedorTerminos,
  Formulario,
  Label,
  MensajeError,
  MensajeExito,
} from "./elementos/Formularios";
import ComponenteInput from "./components/ComponenteInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [usuario, setUsuario] = useState({ campo: "", valido: null });
  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [password1, setPassword1] = useState({ campo: "", valido: null });
  const [password2, setPassword2] = useState({ campo: "", valido: null });
  const [correo, setCorreo] = useState({ campo: "", valido: null });
  const [telefono, setTelefono] = useState({ campo: "", valido: null });
  const [tereminos, setTerminos] = useState(false);
  const [formularioValido, setFormularioValido] = useState(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const validarPassword2 = () => {
    if (password1.campo.length > 0) {
      if (password1.campo !== password2.campo) {
        setPassword2((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        setPassword2((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  const onChangeTerminos = (e) => {
    setTerminos(e.target.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      usuario.valido === "true" &&
      nombre.valido === "true" &&
      password1.valido === "true" &&
      password2.valido === "true" &&
      correo.valido === "true" &&
      telefono.valido === "true" &&
      tereminos
    ) {
      setFormularioValido(true);
      setUsuario({ campo: "", valido: null });
      setNombre({ campo: "", valido: null });
      setPassword1({ campo: "", valido: null });
      setPassword2({ campo: "", valido: null });
      setCorreo({ campo: "", valido: null });
      setTelefono({ campo: "", valido: null });

      //Conexion a la base de datos
    } else {
      setFormularioValido(false);
    }
  };

  return (
    <main>
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
        />
        <ComponenteInput
          estado={nombre}
          cambiarEstado={setNombre}
          tipo="text"
          label="Nombre"
          placeholder="Pablo"
          name="nombre"
          leyendaError="El nombre solo puede contener letras y espacios."
          expresionRegular={expresiones.nombre}
        />
        <ComponenteInput
          estado={password1}
          cambiarEstado={setPassword1}
          tipo="password"
          label="Contraseña"
          name="password1"
          leyendaError="La contraseña tiene que ser de 4 a 12 digitos."
          expresionRegular={expresiones.password}
        />
        <ComponenteInput
          estado={password2}
          cambiarEstado={setPassword2}
          tipo="password"
          label="Repetir Contraseña"
          name="password2"
          leyendaError="Ambas contraseñas deben ser iguales."
          funcion={validarPassword2}
        />
        <ComponenteInput
          estado={correo}
          cambiarEstado={setCorreo}
          tipo="email"
          label="Correo Electronico"
          placeholder="pablo@correo.com"
          name="correo"
          leyendaError="El correo solo puede contener letras, numeros, simbolos, sin espacios en blanco."
          expresionRegular={expresiones.correo}
        />
        <ComponenteInput
          estado={telefono}
          cambiarEstado={setTelefono}
          tipo="text"
          label="Teléfono"
          placeholder="4491234567"
          name="telefono"
          leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
          expresionRegular={expresiones.telefono}
        />

        <ContenedorTerminos>
          <Label>
            <input
              type="checkbox"
              name="terminos"
              id="terminos"
              checked={tereminos}
              onChange={onChangeTerminos}
            />
            Acepto los Terminos y Condiciones
          </Label>
        </ContenedorTerminos>

        {formularioValido === false && (
          <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b> Por favor rellena el formulario correctamente.
            </p>
          </MensajeError>
        )}

        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          {formularioValido === true && (
            <MensajeExito>Formulario enviado exitosamente</MensajeExito>
          )}
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );
};

export default App;
