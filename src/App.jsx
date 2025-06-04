import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/MainApp/Hero';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      < Navbar/>
      <Routes>
          <Route path='/' element={<Hero/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
