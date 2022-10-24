import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Cal from './components/Cal';
import Login from './auth/Login';
import Signup from './auth/Signup';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
        </Routes>
          <Cal/>
        
      </div>
    </BrowserRouter>
  );
}
export default App;