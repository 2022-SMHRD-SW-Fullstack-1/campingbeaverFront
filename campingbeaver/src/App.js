import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout/Layout'
import Login from './pages/Login/Login'
import Mypage from "./pages/Mypage/Mypage";
import Reservation from "./pages/Reservation/Reservation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/Reservation" element={<Reservation/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
