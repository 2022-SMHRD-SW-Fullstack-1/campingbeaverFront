
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import ProductList from './auth/ProductList';
import Store from './auth/Store';
import Layout from './components/Layout/Layout'

import MyPage from "./pages/MyPage/MyPage";
import Reservation from "./pages/Reservation/Reservation"; 
import ReviewForm from "../src/pages/ReviewUpload/ReviewForm"
import Cartdetail from "../src/pages/Cart/Cartdetail"
import Products from "../src/pages/Product/Products"
import Detail from "../src/pages/Product/Detail"
import axios from 'axios';
import { useEffect, useState } from "react";


function App() {
  // const [hello, setHello] = useState('')
  // useEffect(() => {

  //   fetch('/beaver/hello')
  //   .then(response => response.text())
  //   .then(hello => {
  //     setHello(hello)})
  // }, []);


  return (
      // <h1>{hello}</h1>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/MyPage" element={<MyPage/>}/>
        <Route path="/Reservation" element={<Reservation/>}/>
        <Route path="/ReviewForm" element={<ReviewForm/>}/>
        <Route path="/cart" element={<Cartdetail />} />
        <Route path='/products' element={<Products />} />
        <Route path='/detail:num' element={<Detail />} />
        <Route path="Signup" element={<SignUp/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="ProductList" element={<ProductList/>} />
        <Route path="Store" element={<Store/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
