import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./Profile";
import Cart from "./Cart";

function App () {
    return (
        <>
            <BrowserRouter>
                    <Routes>
                        <Route path="/profile" element={<Profile />}/>
                        <Route path="/carrinho" element={<Cart />}/>
                    </Routes>
            </BrowserRouter>
        </>
    )
};

export default App;