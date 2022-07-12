import { ArrowBack, ChevronDownCircle } from "react-ionicons";
import { Trash } from "react-ionicons";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import CartContext from "./context/Cart";
import TokenContext from "./context/Token";
import UserNameContext from "./context/UserName";

export default function CartScreen() {
  const navigate = useNavigate();
  const [userName, setUserName] = useContext(UserNameContext);
  const [products, setProducts] = useState([]);
  console.log(products);
  const [adress, setAdress] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [token, setToken] = useContext(TokenContext);

  function totalPrice(object) {
    let total = 0;
    object.forEach((obj) => {
      total = total + (obj.price - (obj.price * obj.discount) / 100) / 100;
    });
    return total;
  }

  function sendBuy() {
    const config = { Authenticator: `Baerer ${token}` };
    let body = products.map((product) => ({ id: product.id }));

    const promisse = axios.post(
      "https://api-geekstore.herokuapp.com/orders",
      body,
      config
    );
    promisse.then(() => {
      alert(
        "Pedido realizado com sucesso. Em breve você receberá os produtos em sua casa"
      );
      setCart([]);
      navigate("/");
    });
    promisse.catch(() => {
      console.log("algo de errado não está certo");
    });
  }

  useEffect(() => {
    if (!userName) {
      alert("É preciso acessar a sua conta primeiro");
      navigate("/entrar");
    }

    let object = [];

    const config = { Authenticator: `Baerer ${token}` };

    cart.forEach((item) => {
      object.push({ id: item });
    });

    const promisse = axios.get(
      "https://api-geekstore.herokuapp.com/user",
      config
    );
    promisse.then((response) => setAdress(response.log));
    promisse.catch(() => console.log("faio no primero"));

    const promisse1 = axios.post(
      "https://api-geekstore.herokuapp.com/cart",
      object
    );
    promisse1.then((response) => {
      setProducts(response.data);
      console.log("atualizou");
    });
    promisse1.catch(() => {
      console.log("falhou");
    });
  }, []);

  return (
    <Container>
      <Header>
        <Return
          onClick={() => navigate("/")}
          color={"white"}
          height="40px"
          width="40px"
        />
        <h1>Meu carrinho</h1>
      </Header>
      <Adress>
        <h1>Endereço para entrega:</h1>
        <p>
          Rua {adress.street}, Nº 112 - {adress.district}
        </p>
        <p>Complemento: {adress.complement}</p>
        <p>
          {adress.city} - {adress.uf}
        </p>
        <p>CEP: {adress.cep}</p>
      </Adress>
      <Products>
        {products.map((product, index) => (
          <Product key={index}>
            <div className="info">
              <div className="item">
                <p className="bold">{product.name}</p>
                <img src={product.img} alt="produto" />
              </div>
              <div className="price blue bold">
                <p>
                  R${" "}
                  {(
                    (product.price - (product.price * product.discount) / 100) /
                    100
                  ).toFixed(2)}
                </p>
                <Delete
                  onClick={() => {
                    let newList = [...products];
                    let newCart = [...cart];
                    newList.splice(index, 1);
                    newCart.splice(index, 1);
                    setProducts(newList);
                    setCart(newCart);
                  }}
                  color={"#000000"}
                  height="20px"
                  width="20px"
                />
              </div>
            </div>
          </Product>
        ))}
      </Products>
      <Confirm>
        <div className="flex">
          <h1 className="bold">Total:</h1>
          <h1 className="bold green">R$ {totalPrice(products)}</h1>
        </div>
        <button
          onClick={() => {
            sendBuy();
          }}
        >
          Finalizar Compra
        </button>
      </Confirm>
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

  .bold {
    font-weight: 700;
  }
  .blue {
    color: #0086ff;
  }
  .green {
    color: green;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
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
  margin-bottom: 25px;
  border-radius: 10px;
  background: white;
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
  font-size: 20px;
`;

const Product = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-top: solid 1px #404040;
  border-bottom: solid 1px #404040;
  background: white;
  margin: 10px 0;

  img {
    height: 120px;
    width: 120px;
    margin-left: 20px;
  }

  .info {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item {
    margin-left: 20px;
  }

  .price {
    margin-right: 20px;
  }
`;
const Delete = styled(Trash)`
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const ReturnHome = styled(Trash)`
  cursor: pointer;
`;

const Confirm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 30px;
  max-width: 380px;
  font-size: 20px;

  button {
    width: 100%;
    height: 70px;
    border: none;
    border-radius: 10px;
    font-size: 25px;
    font-weight: 700;
    color: black;
    background: green;
    margin: 30px 0;
  }
`;
