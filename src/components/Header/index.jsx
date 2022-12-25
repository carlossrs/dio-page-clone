import React from "react";
import logo from "../../assets/logo-dio.png";
import avatar from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button";

import {
  Container,
  Wrapper,
  BuscarInputContainer,
  Input,
  Row,
  Menu,
  MenuRight,
  UserPicture,
  Logo,
} from "./styles";

const Header = ({ autenticado }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Row>
          <Logo src={logo} alt="Logo da dio" onClick={() => navigate("/")} />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src={avatar} />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" onClick={() => navigate("/login")} />
              <Button title="Cadastrar" onClick={() => navigate("/signup")} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
