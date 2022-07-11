import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowBackCircleOutline } from "react-ionicons";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import CartContext from "./context/Cart";

export default function Product() {
  const [cart, setCart] = useContext(CartContext);

  const navigate = useNavigate();

  const { id } = useParams();
  const object = {
    id: parseInt(id),
  };

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const promise = axios.post(
      "https://api-geekstore.herokuapp.com/product",
      object
    );
    promise.then((res) => {
      setProduct(res.data);
    });
    promise.catch((err) => {
      alert(err.response.data);
      navigate("/");
    });
  }, []);

  function attCarrinho() {
    setCart([...cart, parseInt(id)]);
    alert("O item foi adicionado ao seu carrinho!");
  }

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
          <h2>GeekStore</h2>
        </H2>
      </Header>
      <Main>
        <ProductName>
          <h2>{product.name}</h2>
        </ProductName>
        <ProductImage>
          <img src={product.img} />
        </ProductImage>
        {product.promotion ? (
          <>
            <BeforePrice>R$ {(product.price / 100).toFixed(2)}</BeforePrice>
            <ProductPrice>
              R$ {((product.price * 90) / 10000).toFixed(2)}
            </ProductPrice>
          </>
        ) : (
          <ProductPrice>R$ {(product.price / 100).toFixed(2)}</ProductPrice>
        )}
        <Button onClick={attCarrinho}>Adicionar ao carrinho!</Button>
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
  justify-content: start;
  background-color: #ffffff;
  height: 800px;
`;
const Header = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #0086ff;
  box-shadow: 2px 2px 2px lightgray;
  display: flex;
  position: fixed;
  top: 0;
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

const Main = styled.div`
  width: 100vw;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
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

const ProductName = styled.div`
  color: black;
  font-family: "Raleway";
  font-size: 30px;
`;

const ProductImage = styled.div`
  img {
    height: 300px;
  }
`;

const ProductPrice = styled.div`
  font-family: "Raleway";
  color: #ff8900;
  font-size: 40px;
`;

const BeforePrice = styled.div`
  text-decoration: line-through;
  font-family: "Raleway";
  color: gray;
  font-size: 25px;
  margin-top: 20px;
`;

const Button = styled.div`
  height: 80px;
  width: 320px;
  border-radius: 5px;
  background-color: #029905;
  color: #ffffff;
  font-size: 25px;
  text-align: center;
  font-family: "Raleway";
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  font-weight: bold;
`;
