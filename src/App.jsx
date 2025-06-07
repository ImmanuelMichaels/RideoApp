import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/MainApp/Hero';
import Footer from './Components/Footer/Footer';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      < Navbar/>
      <Routes>
          <Route path='/' element={<Hero/>}/>
      </Routes>
      < Footer/>
    </BrowserRouter>
  )
}

export default App
