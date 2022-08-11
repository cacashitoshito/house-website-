import Home from "./pages/Home";
import Bedroom from "./pages/Bedroom";
import Dining from "./pages/Dining";
import Kitchen from "./pages/Kitchen";
import Backyard from "./pages/Backyard";

import Header from "./components/Header";


import { BrowserRouter as Router, Route, Routes } from 
"react-router-dom";


import './App.css';


function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/Bedroom" element={<Bedroom/>}/>
      <Route path="/Dining" element={<Dining/>}/>
      <Route path="/Kitchen" element={<Kitchen/>}/>
      <Route path="/Backyard" element={<Backyard/>}/>
      

      </Routes>
      </Router>
      </div>
    
  );
}

export default App;
