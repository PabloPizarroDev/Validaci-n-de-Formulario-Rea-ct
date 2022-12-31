import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Boton,
  ContenedorBotonCentrado,
  ComponenteTextArea,
  Formulario,
  MensajeError,
  MensajeExito,
} from "../styles/Formularios";
import ComponenteInput from "../components/ComponenteInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
/* import helpHttp from "../helpers/helpHttp"; */

/* const initialForm = {
  nombre: "",
  usuario: "",
  email: "",
  telefono: "",
  comentarios: "",
}; */
const Form = () => {
  const [usuario, setUsuario] = useState({ campo: "", valido: null });
  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [correo, setCorreo] = useState({ campo: "", valido: null });
  const [telefono, setTelefono] = useState({ campo: "", valido: null });
  const [comentarios, setComentarios] = useState(null);
  const [formularioValido, setFormularioValido] = useState(null);
  /*   const [form, setForm] = useState(initialForm);

  const [response, setResponse] = useState(null); */

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    comentarios: /^.{1,255}$/, //comentario no mas de 255 caracteres
  };

  const LogoutButton = () => {
    const { logout } = useAuth0();
    return <button onClick={() => logout()}>Logout</button>;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      usuario.valido === "true" &&
      nombre.valido === "true" &&
      correo.valido === "true" &&
      telefono.valido === "true" &&
      comentarios.valido === "true"
    ) {
      setFormularioValido(true);
      setUsuario({ campo: "", valido: null });
      setNombre({ campo: "", valido: null });
      setCorreo({ campo: "", valido: null });
      setTelefono({ campo: "", valido: null });
      setComentarios({ campo: "", valido: null });

      //Conexion a la base de datos
    } else {
    /*  if (setFormularioValido(true)) {
      alert("Enviando Formulario");

      helpHttp("https://formsubmit.co/ajax/pizarropabloandres@hotmail.com", {
        body: form,
        headers: {
          "Content-Type": "application/json",
          Accept: "Aplication/json",
        },
      })
        .post()
        .then((res) => {
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => {
            setResponse(false);
          }, 3000);
        });
    }  */
      setFormularioValido(false);
    }
  };

  return (
    <div>
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
          estado={nombre}
          cambiarEstado={setNombre}
          tipo="text"
          label="Nombre"
          placeholder="Pablo"
          name="nombre"
          leyendaError="El nombre solo puede contener letras y espacios."
          expresionRegular={expresiones.nombre}
          required
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
          required
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
          required
        />
        <ComponenteTextArea
          estado={comentarios}
          cambiarEstado={setComentarios}
          name="comentarios"
          tipo="text"
          label="Comentarios"
          cols="50"
          rows="5"
          placeholder="Escribe tu Consulta"
          leyendaError="Solo se pueden escribir 255 caracteres"
          expresionRegular={expresiones.comentarios}
          autoComplete="on"
          autoCapitalize="words"
          maxLength={255}
          required
        />

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
            <MensajeExito>
              Formulario enviado exitosamente
              <LogoutButton />
            </MensajeExito>
          )}
        </ContenedorBotonCentrado>
      </Formulario>
    </div>
  );
};

export default Form;
