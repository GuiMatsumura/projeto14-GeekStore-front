import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const navigate = useNavigate();

  function singUp() {
    const body = {
      name,
      email,
      password,
      cep,
      street,
      complement,
      district,
      city,
      uf,
    };
    console.log(body);
    const promise = axios.post("xxx", body);
    promise
      .then((res) => {
        console.log(res.data);
        navigate("/entrar");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <>
      <Body>
        <Header>
          <h2>GeekStore</h2>
        </Header>
        <Main>
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Input
            type="number"
            placeholder="CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Rua"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Complemento"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Bairro"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
          <Section2>
            <Input2
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input2
              type="text"
              placeholder="UF"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </Section2>
          <Button onClick={singUp}>Cadastrar</Button>
          <Link className="teste" to="/entrar">
            <h3>Já tem conta? Entre!</h3>
          </Link>
        </Main>
        <Footer>
          Caso os produtos apresentem divergências de valores, o preço válido é
          o da Sacola de compras. Vendas sujeitas a análise e confirmação de
          dados.
        </Footer>
      </Body>
    </>
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
  padding-top: 50px;
  h3 {
    font-family: "Raleway";
    margin-top: 50px;
    color: #404040;
    font-size: 18px;
  }
  .teste {
    text-decoration: none;
  }
`;

const Input = styled.input`
  margin-bottom: 15px;
  height: 30px;
  width: 300px;
  border-radius: 5px;
  color: #404040;
  font-size: 15px;
  padding-left: 14px;
  font-family: "Raleway";
  border: 1px solid #d0d0d0;
  ::placeholder {
    color: #404040;
    opacity: 0.75;
  }
`;
const Input2 = styled.input`
  margin-bottom: 15px;
  height: 30px;
  width: 130px;
  border-radius: 5px;
  color: #404040;
  font-size: 15px;
  padding-left: 14px;
  font-family: "Raleway";
  border: 1px solid #d0d0d0;
  margin: 0 10px 20px 10px;
  ::placeholder {
    color: #404040;
    opacity: 0.75;
  }
`;

const Section2 = styled.div`
  flex-direction: column;
`;

const Button = styled.div`
  height: 40px;
  width: 320px;
  border-radius: 5px;
  background-color: #029905;
  color: #ffffff;
  font-size: 20px;
  font-family: "Raleway";
  display: flex;
  justify-content: center;
  align-items: center;
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
