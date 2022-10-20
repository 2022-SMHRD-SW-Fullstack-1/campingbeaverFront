import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Cal from './components/Cal';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
        </Routes>
          <Cal/>
      </div>
    </BrowserRouter>
  );
}
export default App;