import React from 'react'
// import Hello from './Components/Hello'
import Login from './Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from './Register';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/reg" element={<Forms/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>

  )
}

export default App