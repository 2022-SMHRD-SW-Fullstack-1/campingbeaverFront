import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout/Layout'
import Login from './pages/Login/Login'
import Mypage from "./pages/Mypage/Mypage";
import Reservation from "./pages/Reservation/Reservation";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
        <Layout />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
