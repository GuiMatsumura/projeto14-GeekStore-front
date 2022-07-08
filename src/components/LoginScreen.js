import { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import TokenContext from "./context/Token";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useContext(TokenContext);

  const navigate = useNavigate();

  function login() {
    const body = {
      email,
      password,
    };
    const promise = axios.post("xxx", body);
    promise
      .then((res) => {
        setToken(res.data.token);
        navigate("/home");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <Body>
      <Header>
        <h2>GeekStore</h2>
      </Header>
      <Main>
        <h3>Entre com e-mail e senha cadastrados.</h3>
        <Input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={login}>Entrar</Button>
        <Link className="textDecorationNone" to="/cadastro">
          <h4>Primeira vez? Cadastre-se!</h4>
        </Link>
      </Main>
      <Footer>
        Caso os produtos apresentem divergências de valores, o preço válido é o
        da Sacola de compras. Vendas sujeitas a análise e confirmação de dados.
      </Footer>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
`;

const Header = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #0086ff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px lightgray;
  h2 {
    color: #ffffff;
    font-family: "Raleway";
    font-weight: bold;
    font-size: 30px;
  }
`;

const Main = styled.div`
  width: 100vw;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  h3 {
    font-family: "Raleway";
    margin-top: 50px;
    color: #404040;
    font-size: 25px;
    margin-bottom: 40px;
    text-align: center;
  }
  .textDecorationNone {
    text-decoration: none;
  }
  h4 {
    font-family: "Raleway";
    margin-top: 50px;
    color: #404040;
    font-size: 18px;
  }
`;

const Input = styled.input`
  margin-bottom: 15px;
  height: 50px;
  width: 300px;
  border-radius: 5px;
  color: #404040;
  font-size: 20px;
  padding-left: 14px;
  font-family: "Raleway";
  border: 1px solid #d0d0d0;
  ::placeholder {
    color: #404040;
    opacity: 0.75;
  }
`;

const Button = styled.div`
  height: 60px;
  width: 320px;
  border-radius: 5px;
  background-color: #029905;
  color: #ffffff;
  font-size: 20px;
  font-family: "Raleway";
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #f4f4f4;
  width: 100vw;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway";
  color: #404040;
  font-size: 10px;
`;
