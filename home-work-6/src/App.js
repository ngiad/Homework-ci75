import './App.css';
// import { useState } from 'react';
import Products from './Compunents/Products';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
// import Header from './Compunents/Header';
import Ex1 from './Compunents/Ex1';
import Header from './Compunents/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/ex1' element={<Ex1 />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
