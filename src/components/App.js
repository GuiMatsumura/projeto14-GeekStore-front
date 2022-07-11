import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import "../css/reset.css";
import TokenContext from "./context/Token";
import UserNameContext from "./context/UserName";
import CartContext from "./context/Cart";

import Login from "./LoginScreen";
import SingUp from "./SingUpScreen";
import Home from "./Home";
import Hardware from "./Departaments/Hardware";
import Monitor from "./Departaments/Monitor";
import Jogos from "./Departaments/Jogos";
import Perifericos from "./Departaments/Perifericos";
import Promotion from "./Departaments/Promotion";
import Product from "./Product";
import Profile from "./Profile";
import CartScreen from "./CartScreen";

export default function App() {
  const [token, setToken] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [cart, setCart] = React.useState([]);

  return (
    <TokenContext.Provider value={[token, setToken]}>
      <UserNameContext.Provider value={[userName, setUserName]}>
        <CartContext.Provider value={[cart, setCart]}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/entrar" element={<Login />} />
              <Route path="/cadastro" element={<SingUp />} />
              <Route path="/hardwares" element={<Hardware />} />
              <Route path="/monitor" element={<Monitor />} />
              <Route path="/jogos" element={<Jogos />} />
              <Route path="/perifericos" element={<Perifericos />} />
              <Route path="/promocao" element={<Promotion />} />
              <Route path="/produto/:id" element={<Product />} />
              <Route path="/perfil" element={<Profile />} />
              <Route path="/cart" element={<CartScreen />} />
            </Routes>
          </BrowserRouter>
        </CartContext.Provider>
      </UserNameContext.Provider>
    </TokenContext.Provider>
  );
}
