import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Cal from './components/Cal';
import LoginPage from './auth/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
        <Route path="LoginPage" element={<LoginPage />} />
        </Routes>
          <Cal/>
        
      </div>
    </BrowserRouter>
  );
}
export default App;