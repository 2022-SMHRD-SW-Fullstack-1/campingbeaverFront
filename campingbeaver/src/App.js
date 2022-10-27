import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout'
import Login from './pages/Login/Login'
import Mypage from "./pages/Mypage/Mypage";
import Reservation from "./pages/Reservation/Reservation";
import Cartdetail from "./pages/Cart/Cartdetail";
import Products from "./pages/Product/Products"
import Detail from "./pages/Product/Detail";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch('/beaver/main')
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
  }, [])

  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/cart" element={<Cartdetail />} />
        <Route path='/products' element={<Products />} />
        <Route path='/detail:num' element={<Detail />} />
      </Routes>
      <div>
        {message}
      </div>
    </BrowserRouter>
  );
}

export default App;
