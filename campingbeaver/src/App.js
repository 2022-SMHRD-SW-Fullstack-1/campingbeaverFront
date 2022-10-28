
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Store from './pages/Product/Store';
import Layout from './components/Layout/Layout'
import MyPage from "./pages/MyPage/MyPage";
import Reservation from "./pages/Reservation/Reservation"; 
import ReviewForm from "../src/pages/ReviewUpload/ReviewForm"
import Cartdetail from "../src/pages/Cart/Cartdetail"
import Products from "../src/pages/Product/Products"
import Detail from "../src/pages/Product/Detail"
import SurveySecond from './components/Layout/SurveySecond'
import SurveyThird from './components/Layout/SurveyThird'
import Recommendation from './pages/Recommendation/Recommendation'
import axios from 'axios';
import { useEffect, useState } from "react";
import Kakao from './pages/Login/Kakao';


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
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Store" element={<Store/>} />
        <Route path="/Recommendation" element={<Recommendation/>}/>
        <Route path='/surveysecond' element={<SurveySecond/>}/>
        <Route path='/surveythird' element={<SurveyThird/>}/>
        <Route path="/OAuth" element={<Kakao/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
