import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Cal from './components/Cal';
import Login from './auth/Login';
import Signup from './auth/Signup';
import ProductList from './auth/ProductList';
import Store from './auth/Store';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
        <Route path="Signup" element={<Signup/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="ProductList" element={<ProductList/>} />
        <Route path="Store" element={<Store/>} />
        </Routes>
          <Cal/>
        
      </div>
    </BrowserRouter>
  );
}
export default App;