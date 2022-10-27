
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import ProductList from './auth/ProductList';
import Store from './auth/Store';
import Layout from './components/Layout/Layout'

import MyPage from "./pages/MyPage/MyPage";
import Reservation from "./pages/Reservation/Reservation"; 
import ReviewForm from "../src/pages/ReviewUpload/ReviewForm"
import axios from 'axios';
import { useEffect, useState } from "react";


function App() {
  const [hello, setHello] = useState('')
  useEffect(() => {

    fetch('/beaver/hello')
    .then(response => response.text())
    .then(hello => {
      setHello(hello)})
  }, []);


  return (
      // <h1>{hello}</h1>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/MyPage" element={<MyPage/>}/>
        <Route path="/Reservation" element={<Reservation/>}/>
        <Route path="/ReviewForm" element={<ReviewForm/>}/>
        <Route path="Signup" element={<Signup/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="ProductList" element={<ProductList/>} />
        <Route path="Store" element={<Store/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
