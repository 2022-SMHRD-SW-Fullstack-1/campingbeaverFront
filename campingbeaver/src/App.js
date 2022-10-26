
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout/Layout'
import Login from './pages/Login/Login'
import MyPage from "./pages/MyPage/MyPage";
import Reservation from "./pages/Reservation/Reservation"; 
import ReviewForm from "../src/pages/ReviewUpload/ReviewForm"
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
      </Routes>
    </BrowserRouter>
  )
}

export default App;
