import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Menu from "./pages/Menu.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
