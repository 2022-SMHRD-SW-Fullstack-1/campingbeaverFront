
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Store from './pages/Product/Store';
import Layout from './components/Layout/Layout'
import Mypage from "./pages/MyPage/Mypage";
import Reservation from "./pages/Reservation/Reservation";
import ReviewForm from "../src/pages/ReviewUpload/ReviewForm"
import Cart from "../src/pages/Cart/Cart"
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
import Footer from './components/Layout/Footer'
import RecomDetail from './pages/Recommendation/RecomDetail';
import Axios from 'axios';

function App() {
  const [auth, setAuth] = useState(false);


  useEffect(() => {
    console.log('로그인 인증값 : ', auth);
  }, [auth])
  return (
    <div className='App'>
      <Header auth={auth} setAuth={setAuth} />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Recommendation" element={<Recommendation />} />
          <Route path='/surveysecond' element={<SurveySecond />} />
          <Route path='/surveythird' element={<SurveyThird />} />
          <Route path='/Naver' element={<NaverLogin setAuth={setAuth} auth={auth} />} />
          <Route path='/wishlist:id' element={<WishList />} />
          <Route path='/reservlist:id' element={<ReservList />} />
          
          <Route path="/logout" element={<Logout />}></Route>

          <Route path="/ReviewForm:resnum" element={<ReviewForm />} />
          <Route path='/ReviewList/:id' >
            <Route index element={<ReviewList />} />
            <Route path=":reviewID" element={<ReviewPage />} />
          </Route>

        </Routes>
      <Footer/>
    </div>
  )
}

export default App;
