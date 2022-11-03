
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Store from './pages/Product/Store';
import Layout from './components/Layout/Layout'
import MyPage from "./pages/MyPage/MyPage";
import Reservation from "./pages/Reservation/Reservation";
import ReviewForm from "../src/pages/ReviewUpload/ReviewForm"
import Cartdetail from "../src/pages/Cart/Cartdetail"
import SurveySecond from './components/Layout/SurveySecond'
import SurveyThird from './components/Layout/SurveyThird'
import Recommendation from './pages/Recommendation/Recommendation'
import NaverLogin from './pages/Login/NaverLogin'; import Logout from './pages/member/Logout'
import ReviewList from './pages/Review/ReviewList';
import ReviewPage from './pages/Review/ReviewPage';
import Header from './components/Layout/Header';
import WishList from './pages/MyPage/WishList/WishList';
import ReservList from './pages/MyPage/ReservCheck/ReservList';
import { useEffect, useState } from "react";
import RecomDetail from './pages/Recommendation/RecomDetail';
import Axios from 'axios';
import Header from './components/Layout/Header';


function App() {
<<<<<<< HEAD
  // const [hello, setHello] = useState('')
  // useEffect(() => {

  //   fetch('/beaver/main')
  //   .then(response => response.text())
  //   .then(hello => {
  //     setHello(hello)})
  // }, []);

=======
  const [auth, setAuth] = useState(false);
>>>>>>> 80977c75c3076a450a91269951ee4d7a226fdb68

  useEffect(() => {
    console.log('로그인 인증값 : ', auth);
  }, [auth])
  return (
<<<<<<< HEAD
    <BrowserRouter>
    <Header/>
    {/* <h1>{hello}</h1> */}
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
        <Route path="/Recomdetail" element={<RecomDetail/>}/>
        <Route path='/surveysecond' element={<SurveySecond/>}/>
        <Route path='/surveythird' element={<SurveyThird/>}/>
        <Route path='/Naver' component={NaverLogin} />
=======
    <div className='App'>
      <Header auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/cart" element={<Cartdetail />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Recommendation" element={<Recommendation />} />
        <Route path='/surveysecond' element={<SurveySecond />} />
        <Route path='/surveythird' element={<SurveyThird />} />
        <Route path='/Naver' element={<NaverLogin setAuth={setAuth} auth={auth} />} />
        <Route path='/wishlist:id' element={<WishList />} />
        <Route path='/reservlist:id' element={<ReservList />} />


        {/* <Route path="/join" element={<Join />}></Route> */}
        <Route path="/logout" element={<Logout />}></Route>

        <Route path="/ReviewForm" element={<ReviewForm />} />
        <Route path='/ReviewList' element={<ReviewList />} />
        <Route path="/@username">
          <Route index element={<ReviewList />} />
          <Route path=":reviewID" element={<ReviewPage />} />
        </Route>
>>>>>>> 80977c75c3076a450a91269951ee4d7a226fdb68
      </Routes>
    </div>
  )
}

export default App;
