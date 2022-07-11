import { MenuSharp, ReorderThreeOutline } from "react-ionicons";
import { CartOutline, PersonCircleOutline } from "react-ionicons";
import { Star } from "react-ionicons";
import { ChevronForward } from "react-ionicons";
import { LogoFacebook } from "react-ionicons";
import { LogoInstagram } from "react-ionicons";
import { LogoLinkedin } from "react-ionicons";
import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [promotionList, setPromotionList] = useState();

  function productDisplay(product) {
    const promotionPrice =
      (product.price - product.price * (product.discount / 100)) / 100;

    return (
      <Product
        onClick={() => {
          navigate(`/produto/${product.id}`);
        }}
      >
        <img src={product.img} alt="Image" />
        <div>
          <h1>{product.name}</h1>
          <div>
            <Star color={"gold"} height="15px" width="15px" />
            <Star color={"gold"} height="15px" width="15px" />
            <Star color={"gold"} height="15px" width="15px" />
            <Star color={"gold"} height="15px" width="15px" />
            <Star color={"gold"} height="15px" width="15px" />
          </div>
          <p className="normalPrice-promo">{`por R$ ${(
            product.price / 100
          ).toFixed(2)}`}</p>
          <p className="promotionPrice orange">{`R$ ${promotionPrice.toFixed(
            2
          )}`}</p>
          <p>{`10x de R$ ${(promotionPrice / 10).toFixed(2)} s/ juros`}</p>
        </div>
      </Product>
    );
  }

  useEffect(() => {
    const promisse = axios.get("https://api-geekstore.herokuapp.com/promotion");
    promisse.then((response) => {
      setPromotionList(response.data);
      console.log(response.data);
    });
    promisse.catch(() => {
      console.log("falhou");
    });
  }, []);

  return (
    <Container>
      <Header>
        <div>
          <ReorderThreeOutline
            onClick={() => {
              setMenu(!menu);
            }}
            color={"#00000"}
            height="40px"
            width="40px"
          />
          <h1 className="bold">GEEKstore</h1>
          <PersonCircleOutline
            color={"#ffffff"}
            height="40px"
            width="40px"
            onClick={() => {
              navigate("/perfil");
            }}
          />
        </div>
        <form>
          <input placeholder="Busca..."></input>
        </form>
        <div className="rainbow"></div>
        <div className="headerBottom"></div>
      </Header>
      <SideMenu menu={menu}>
        <h1 className="bold">Olá, usuário</h1>
        <button
          className="bold"
          onClick={() => {
            navigate("/perfil");
          }}
        >
          Meus pedidos
        </button>
        <button
          className="bold"
          onClick={() => {
            navigate("/perfil");
          }}
        >
          Meus locais de entrega
        </button>
        <div className="flexColumn department">
          <button
            className="bold"
            onClick={() => {
              navigate("/hardwares");
            }}
          >
            Hardwares
          </button>
          <button
            className="bold"
            onClick={() => {
              navigate("/monitor");
            }}
          >
            Monitores
          </button>
          <button
            className="bold"
            onClick={() => {
              navigate("/perifericos");
            }}
          >
            Periféricos
          </button>
          <button
            className="bold"
            onClick={() => {
              navigate("/jogos");
            }}
          >
            Jogos
          </button>
        </div>
        <a
          className="bold"
          href="https://api.whatsapp.com/send?phone=+5521970655006"
        >
          Central de atendimento
        </a>
        <a className="bold">Fale conosco</a>
      </SideMenu>
      <Blur
        menu={menu}
        onClick={() => {
          setMenu(false);
        }}
      ></Blur>
      <ActiveOffer>
        <div className="sectionTitle bodySize bold">Ofertas Imperdíveis</div>
        <ShowOff>
          <div className="productDisplay">
            {promotionList ? productDisplay(promotionList[0]) : <p></p>}
            {promotionList ? productDisplay(promotionList[1]) : <p></p>}
          </div>
          <div className="productDisplay">
            {promotionList ? productDisplay(promotionList[2]) : <p></p>}
            {promotionList ? productDisplay(promotionList[3]) : <p></p>}
          </div>
          <div className="showOffNavigation">
            <p
              className="blue bodySize bold"
              onClick={() => {
                navigate("/promocao");
              }}
            >
              Veja todas ofertas
            </p>
            <ChevronForward color={"#1c71d8"} height="25px" width="25px" />
          </div>
        </ShowOff>
      </ActiveOffer>
      <ActiveOffer>
        <div className="sectionTitle bodySize bold">
          Escolha por departamento
        </div>
        <ShowOff>
          <div className="productDisplay">
            <Product
              className="backGroundBlue"
              onClick={() => {
                navigate("/hardwares");
              }}
            >
              <h1>Hardware</h1>
              <img
                src="https://static.kabum.com.br/conteudo/categorias/HARDWARE_1648493892.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              />
              <div></div>
            </Product>
            <Product
              className="backGroundBlue"
              onClick={() => {
                navigate("/perifericos");
              }}
            >
              <h1>Periféricos</h1>
              <img
                src="https://static.kabum.com.br/conteudo/categorias/PERIFERICOS.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              />
              <div></div>
            </Product>
          </div>
          <div className="productDisplay">
            <Product
              className="backGroundBlue"
              onClick={() => {
                navigate("/monitor");
              }}
            >
              <h1>Monitores</h1>
              <img
                src="https://static.kabum.com.br/conteudo/categorias/TV_1645045665.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              />
              <div></div>
            </Product>
            <Product
              className="backGroundBlue"
              onClick={() => {
                navigate("/jogos");
              }}
            >
              <h1>Jogos</h1>
              <img
                src="https://static.kabum.com.br/conteudo/categorias/SERVICOS-DIGITAIS.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              />
              <div></div>
            </Product>
          </div>
          <div className="showOffNavigation backGroundBlue">
            <p className="white bodySize bold">Todos Departamentos</p>
            <ChevronForward color={"white"} height="25px" width="25px" />
          </div>
        </ShowOff>
      </ActiveOffer>
      <Footer>
        <p className="bold">Mídias sociais</p>
        <div className="flex social">
          <LogoFacebook color={"#000000"} height="30px" width="30px" />
          <LogoInstagram color={"#000000"} height="30px" width="30px" />
          <LogoLinkedin color={"#000000"} height="30px" width="30px" />
        </div>
        <p className="bold">GEEKstore</p>
        <div>
          <p>
            GEEKstore é uma marca registrada de GEEKSTORE COMÉRCIO ELETRÔNICO
            S/A | CNPJ: 03.570.774/0001-59 | Todos os direitos reservados. Os
            preços anunciados neste site ou via e-mail promocional podem ser
            alterados sem prévio aviso. O GEEKstore não é responsável por erros
            descritivos. As fotos contidas nesta página são meramente
            ilustrativas do produto e podem variar de acordo com o
            fornecedor/lote do fabricante. Este site trabalha 100% em
            criptografia SSL. Clique aqui e veja as políticas de nossa empresa.
          </p>
        </div>
      </Footer>
      <Cart>
        <CartOutline
          color={"#0086FF"}
          height="40px"
          width="40px"
          onClick={() => {
            navigate("/cart");
          }}
        />
      </Cart>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: #f4f4f4;
  font-family: "Raleway", sans-serif;

  .rainbow {
    height: 5px;
    width: 100%;
    box-shadow: 0 0 1em white;
    background-image: linear-gradient(
      90deg,
      #009fb2 0,
      #009fc3 3.33%,
      #009ed3 6.67%,
      #009de2 10%,
      #009cef 13.33%,
      #0099f9 16.67%,
      #0096ff 20%,
      #0093ff 23.33%,
      #008eff 26.67%,
      #0089ff 30%,
      #0083ff 33.33%,
      #327bff 36.67%,
      #6b73fc 40%,
      #8e6af2 43.33%,
      #a860e6 46.67%,
      #be55d8 50%,
      #cf4ac9 53.33%,
      #dd3eb8 56.67%,
      #e834a6 60%,
      #f02b95 63.33%,
      #f52682 66.67%,
      #f72770 70%,
      #f62d5f 73.33%,
      #f4364d 76.67%,
      #ef413c 80%,
      #e84b2a 83.33%,
      #df5616 86.67%,
      #d56000 90%,
      #c96900 93.33%,
      #bc7100 96.67%,
      #ae7800 100%
    );
  }
  .headerBottom {
    height: 30px;
    width: 100%;
    background: #0073db;
  }
  .bold {
    font-weight: 700;
  }
  .blue {
    color: #0086ff;
  }
  .white {
    color: white;
  }
  .orange {
    color: #ff8900;
  }
  .bodySize {
    font-size: 20px;
  }
  .sectionTitle {
    margin: 20px 5px;
  }
  .showOffNavigation {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    width: 100%;
    padding: 15px;
    background: white;
  }
  .backGroundBlue {
    background: #0086ff;
    color: white;
  }
  .flex {
    display: flex;
  }
  .flexColumn {
    display: flex;
    flex-direction: column;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #0086ff;
  padding-top: 20px;

  h1 {
    font-size: 30px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    color: white;
  }

  form {
    box-sizing: border-box;
    width: 100%;
    padding: 0 15px;
  }

  input {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    margin: 10px 0;
    padding: 0 20px;
    font-size: 20px;
  }
`;

const SideMenu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  display: ${(props) => (props.menu ? "flex" : "none")};
  flex-direction: column;
  width: 80%;
  padding: 10px 20px;
  background: #0086ff;
  box-shadow: 0 0 1em black;

  .department {
    margin: 20px 0;
  }

  button {
    height: 50px;
    font-size: 20px;
    color: #404040;
    border: solid 1px #ff8900;
    border-radius: 10px;
    margin: 5px;
  }
  a {
    height: 50px;
    font-size: 20px;
    color: #404040;
    background-color: #ffffff;
    border: solid 1px #ff8900;
    border-radius: 10px;
    margin: 5px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 25px;
    color: white;
    margin-bottom: 20px;
  }
`;

const Blur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: ${(props) => (props.menu ? "flex" : "none")};
  height: 100%;
  width: 100%;
  background: rgb(255, 255, 255, 0.7);
`;

const ActiveOffer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  background: #f4f4f4;
`;

const ShowOff = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .productDisplay {
    display: flex;
    justify-content: space-around;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
`;

const Product = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin: 2px;
  border-radius: 10px;
  background: white;

  img {
    height: 125px;
    width: 150px;
  }

  h1 {
    margin-top: 10px;
    font-weight: 700;
  }

  .normalPrice-promo {
    text-decoration: line-through;
  }

  .promotionPrice {
    font-weight: 700;
    font-size: 25px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 30px 20px;
  background: #0086ff;
  color: white;

  .social {
    margin-bottom: 15px;
  }
`;

const Cart = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: solid 2px orange;
  border-radius: 100px;
  position: fixed;
  right: 40px;
  bottom: 40px;
  box-shadow: 0 0 1em orange;
`;
