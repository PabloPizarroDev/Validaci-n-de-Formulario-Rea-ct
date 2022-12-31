import React from "react";
import Form from "./elements/Form";
import CrearUsuario from "./elements/CrearUsuario";
import { useAuth0 } from "@auth0/auth0-react";
/* import LoginButton from "./components/LoginButton"; */
import Loader from "./components/Loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./elements/Home";
import Error404 from "./elements/Error404";
import PrivateRoute from "./elements/PrivateRoute";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <Loader />;

  return (
    <main>
      <h1>Consultas Ciudadania</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/crearcuenta" element={<CrearUsuario />} />
          <Route exact path="/form" element={<Form />} />
          <Route
            exact
            path="/form"
            element={<PrivateRoute component={Form} />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
