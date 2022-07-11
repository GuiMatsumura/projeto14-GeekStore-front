import { ArrowBack } from "react-ionicons";
import { Trash } from "react-ionicons";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "./context/Token";
import CartContext from "./context/Cart";
import UserNameContext from "./context/UserName";
import axios from "axios";
import styled from "styled-components";

export default function CartScreen() {
  const navigate = useNavigate();
  const [token, setToken] = useContext(TokenContext);
  const [cart, setCart] = useContext(CartContext);
  const [userName, setUserName] = useContext(UserNameContext);

  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    if (!userName) {
      alert("É preciso acessar a sua conta primeiro");
      navigate("/entrar");
    }

    let object = [];

    cart.map((item) => {
      object.push({ id: item });
    });

    const promisse = axios.post(
      "https://api-geekstore.herokuapp.com/cart",
      object
    );
    promisse.then((response) => {
      setProducts(...products, response.data);
    });
    promisse.catch(() => {
      console.log("falhou");
    });
  }, []);

  return (
    <Container>
      <Header>
        <Return color={"white"} height="40px" width="40px" />
        <h1>Meu carrinho</h1>
      </Header>
      <Adress>
        <h1>Endereço para entrega:</h1>
        <p>Rua street, Nº 112 - district</p>
        <p>Complemento: complement</p>
        <p>city - uf</p>
      </Adress>
      <Products>
        {products.map((product) => (
          <Product>
            <Trash color={"#000000"} height="20px" width="20px" />
            <div className="info">
              <img src={product.img} alt="product.img" />
              <p>{product.name}</p>
              <div>
                <p>
                  R${" "}
                  {(
                    (product.price - (product.price * product.discount) / 100) /
                    100
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          </Product>
        ))}
      </Products>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: "Raleway", sans-serif;
`;
const Return = styled(ArrowBack)`
  cursor: pointer;
  position: fixed;
  left: 20px;
  top: 17px;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
  padding: 0 20px;
  background: #0086ff;
  color: white;
  font-size: 30px;
  font-weight: 700;
`;

const Adress = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  padding: 20px;
  margin-top: 100px;
  border-radius: 10px;
  box-shadow: 0 0 1em orange;
  font-size: 20px;

  h1 {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  padding: 20px;
  font-size: 20px;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  border-top: solid 2px #404040;
  border-bottom: solid 2px #404040;
  margin: 10px 0;

  img {
    height: 120px;
    width: 120px;
  }

  .info {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
