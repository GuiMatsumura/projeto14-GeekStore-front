import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ArrowBackCircleOutline } from "react-ionicons";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Hardware() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promise = axios.get("https://api-geekstore.herokuapp.com/hardware");

    promise.then((res) => {
      setProducts(res.data);
    });
    promise.catch((err) => {
      alert(err.response.data);
      navigate("/");
    });
  }, []);

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
          <h2>Hardwares</h2>
        </H2>
      </Header>
      <Main>
        {products.map((each) => (
          <Container>
            <ProductBox
              onClick={() => {
                navigate(`/produto/${each.id}`);
              }}
            >
              <ProductImage>
                <img src={each.img} />
              </ProductImage>
              <ProductDetails>
                <ProductName>{each.name}</ProductName>
                {each.promotion ? (
                  <>
                    <BeforePrice>
                      R$ {(each.price / 100).toFixed(2)}
                    </BeforePrice>
                    <ProductPrice>
                      R$ {((each.price * 90) / 10000).toFixed(2)}
                    </ProductPrice>
                  </>
                ) : (
                  <ProductPrice>
                    R$ {(each.price / 100).toFixed(2)}
                  </ProductPrice>
                )}
              </ProductDetails>
            </ProductBox>
          </Container>
        ))}
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
  background-color: #d3d3d3;
  height: 1250px;
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
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductBox = styled.div`
  width: 90vw;
  height: 200px;
  background-color: #ffffff;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px lightgray;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProductName = styled.div`
  font-family: "Raleway";
  margin-bottom: 20px;
`;

const ProductImage = styled.div`
  img {
    height: 150px;
  }
`;
const ProductPrice = styled.div`
  font-family: "Raleway";
  color: #ff8900;
  font-size: 25px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const BeforePrice = styled.div`
  text-decoration: line-through;
  font-family: "Raleway";
  color: gray;
`;
