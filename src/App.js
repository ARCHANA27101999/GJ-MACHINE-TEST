import logo from './logo.svg';
import './App.css';
import Home1 from './Home1';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login1 from './Login1';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1/>}></Route>
        <Route path="/data" element={<Login1/>}></Route>
      </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
