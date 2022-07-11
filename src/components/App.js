import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import "../css/reset.css";
import Login from "./LoginScreen";
import SingUp from "./SingUpScreen";
import TokenContext from "./context/Token";
import UserNameContext from "./context/UserName";
import Home from "./Home";
import Hardware from "./Departaments/Hardware";
import Monitor from "./Departaments/Monitor";
import Jogos from "./Departaments/Jogos";
import Perifericos from "./Departaments/Perifericos";
import Promotion from "./Departaments/Promotion";

export default function App() {
  const [token, setToken] = React.useState("");
  const [userName, setUserName] = React.useState("");
  return (
    <TokenContext.Provider value={[token, setToken]}>
      <UserNameContext.Provider value={[userName, setUserName]}>
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
          </Routes>
        </BrowserRouter>
      </UserNameContext.Provider>
    </TokenContext.Provider>
  );
}
