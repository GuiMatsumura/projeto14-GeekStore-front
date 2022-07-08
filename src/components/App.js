import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import "../css/reset.css";
import Login from "./LoginScreen";
import TokenContext from "./context/Token";

export default function App() {
  const [token, setToken] = React.useState("");
  return (
    <TokenContext.Provider value={[token, setToken]}>
      <BrowserRouter>
        <Routes>
          <Route path="/entrar" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}
