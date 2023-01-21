import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Addemployee from "./components/Addemployee";
import Home from './components/Home';



function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Addemployee/>}/>
    </Routes>
    </BrowserRouter>



   );
}

export default App;
