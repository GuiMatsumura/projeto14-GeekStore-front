import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import "../css/reset.css";
import SingUp from "./SingUpScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
}
