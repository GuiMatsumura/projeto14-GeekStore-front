import styled from "styled-components";
import { ArrowBackCircleOutline } from "react-ionicons";
import { useNavigate } from "react-router-dom";
import UserNameContext from "./context/UserName";
import { useContext } from "react";

export default function Profile() {
  const navigate = useNavigate();
  const [userName, setUserName] = useContext(UserNameContext);
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
        <h2>Olá, {userName}</h2>
        <a href="https://api.whatsapp.com/send?phone=+5521970655006">
          Fale conosco
        </a>
      </Main>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: #ffffff;
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
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: "Raleway";
    font-weight: bold;
    font-size: 30px;
  }
  a {
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
    margin-top: 130px;
    font-weight: bold;
    text-decoration: none;
  }
`;
