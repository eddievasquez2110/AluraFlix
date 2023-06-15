import Home from "../src/Pages/Home"
import Header from '../src/Components/Header'
import React, { Fragment } from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Formulario from "./Components/Formulario";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nuevoVideo' element={<Formulario />} />
      </Routes>
    </Router>
  );
}

export default App;
