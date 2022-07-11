import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ArrowBackCircleOutline } from "react-ionicons";
import { useState } from "react";
import axios from "axios";

export default function Promotion() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const promise = axios.get("https://api-geekstore.herokuapp.com/promotion");

  promise.then((res) => {
    setProducts(res.data);
  });
  promise.catch((err) => {
    alert(err.response.data);
    navigate("/");
  });

  return (
    <Body>
      <Header>
        <Icon>
          <ArrowBackCircleOutline
            color={"#ffffff"}
            height="40px"
            width="40px"
            onClick={() => {
              navigate("/");
            }}
          />
        </Icon>
        <H2>
          <h2>Promoção</h2>
        </H2>
      </Header>
      <Main></Main>
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
  justify-content: start;
  background-color: #ffffff;
`;
const Header = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #0086ff;
  box-shadow: 2px 2px 2px lightgray;
  display: flex;
`;

const Icon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
`;

const H2 = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: #ffffff;
    font-family: "Raleway";
    font-weight: bold;
    font-size: 30px;
  }
`;

const Main = styled.div``;

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
