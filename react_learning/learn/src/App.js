import logo from './logo.svg';
import './App.css';
import React ,{useState, useEffect ,useRef,useMemo}from 'react';
import { Home } from './pages/Home';
import {Header} from './components/header'

import { Footer } from './components/footer';
import { BrowserRouter,Routes,Route} from "react-router-dom"
import { Test } from './pages/test';
import {ProductDetail} from './pages/ProductDetail';

// import {Index} from "./pages/Index.js"
function App() {

  const [cartItems,setCartItems] =useState([])
  return (
    <>
        <Header cartItems={cartItems} />
  <Routes>
    <Route path='' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/test' element={<Test cartItems={cartItems} setCartItems={setCartItems} />} />
    <Route path='/search' element={<Home />} />
    <Route path='/products/:id' element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>}/>
  </Routes>
    <Footer/>

    </>
  )
  }

export default App;
