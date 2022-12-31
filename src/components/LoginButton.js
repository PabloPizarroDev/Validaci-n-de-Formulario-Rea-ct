import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  line-height: 45px;
  width: 30%;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.1s ease all;

  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }
`;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Login</Button>;
};

export default LoginButton;
