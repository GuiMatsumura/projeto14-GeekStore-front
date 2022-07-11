import { ReorderThreeOutline } from "react-ionicons";
import { CartOutline } from "react-ionicons";
import { Star } from "react-ionicons";
import { ChevronForward } from "react-ionicons";
import { LogoFacebook } from "react-ionicons";
import { LogoInstagram } from "react-ionicons";
import { LogoLinkedin } from "react-ionicons";
import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [menu, setMenu] = useState(false);

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
          <CartOutline color={"#00000"} height="40px" width="40px" />
        </div>
        <form>
          <input placeholder="Busca..."></input>
        </form>
        <div className="rainbow"></div>
        <div className="headerBottom"></div>
      </Header>
      <SideMenu menu={menu}>
        <h1 className="bold">Olá, usuário</h1>
        <button className="bold">Meus pedidos</button>
        <button className="bold">Meus locais de entrega</button>
        <div className="flexColumn department">
          <button className="bold">Departamento</button>
          <button className="bold">Departamento</button>
          <button className="bold">Departamento</button>
          <button className="bold">Departamento</button>
        </div>
        <button className="bold">Central de atendimento</button>
        <button className="bold">Fale conosco</button>
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
            <Product>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                alt="produto"
              />
              <div>
                <h1>Produto</h1>
                <div>
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                </div>
                <p className="normalPrice-promo">R$ 300,00</p>
                <p className="promotionPrice">R$ 270,00</p>
                <p>10x de R$ 30,00 s/ juros</p>
              </div>
            </Product>
            <Product>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                alt="produto"
              />
              <div>
                <h1>Produto</h1>
                <div>
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                </div>
                <p className="normalPrice-promo">R$ 300,00</p>
                <p className="promotionPrice">R$ 270,00</p>
                <p>10x de R$ 30,00 s/ juros</p>
              </div>
            </Product>
          </div>
          <div className="productDisplay">
            <Product>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                alt="produto"
              />
              <div>
                <h1>Produto</h1>
                <div>
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                </div>
                <p className="normalPrice-promo">R$ 300,00</p>
                <p className="promotionPrice">R$ 270,00</p>
                <p>10x de R$ 30,00 s/ juros</p>
              </div>
            </Product>
            <Product>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                alt="produto"
              />
              <div>
                <h1>Produto</h1>
                <div>
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                  <Star color={"gold"} height="15px" width="15px" />
                </div>
                <p className="normalPrice-promo">R$ 300,00</p>
                <p className="promotionPrice">R$ 270,00</p>
                <p>10x de R$ 30,00 s/ juros</p>
              </div>
            </Product>
          </div>
          <div className="showOffNavigation">
            <p className="blue bodySize bold">Veja todas ofertas</p>
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
            <Product className="backGroundBlue">
              <h1>Departamento</h1>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                alt="produto"
              />
              <div></div>
            </Product>
            <Product className="backGroundBlue">
              <h1>Departamento</h1>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                alt="produto"
              />
              <div></div>
            </Product>
          </div>
          <div className="productDisplay">
            <Product className="backGroundBlue">
              <h1>Departamento</h1>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                alt="produto"
              />
              <div></div>
            </Product>
            <Product className="backGroundBlue">
              <h1>Departamento</h1>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                alt="produto"
              />
              <div></div>
            </Product>
          </div>
          <div className="showOffNavigation">
            <p className="blue bodySize bold">Todos Departamentos</p>
            <ChevronForward color={"#1c71d8"} height="25px" width="25px" />
          </div>
        </ShowOff>
      </ActiveOffer>
      <Footer>
        <p className="bold">Mídias sociais</p>
        <div className="flex">
          <LogoFacebook color={"#1c71d8"} height="25px" width="25px" />
          <LogoInstagram color={"#000000"} height="25px" width="25px" />
          <LogoLinkedin color={"#000000"} height="25px" width="25px" />
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
  .bodySize {
    font-size: 20px;
  }
  .sectionTitle {
    margin: 20px 5px;
  }
  .showOffNavigation {
    display: flex;
    justify-content: space-between;
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
  width: 100%;
  background: #0086ff;

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
    box-sizing: border-box;
    width: 100%;
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
  background: #f4f4f4;
`;

const ShowOff = styled.div`
  border-radius: 10px;

  .productDisplay {
    display: flex;
    width: 100%;
    margin: 0 5px;
  }
`;

const Product = styled.div`
  padding: 10px;
  margin: 2px;
  background: white;

  img {
    height: 125px;
    width: 170px;
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
    font-size: 30px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background: #0086ff;
  color: white;
`;
