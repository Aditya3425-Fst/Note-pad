import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import Tools from './components/Tools'
import Home from './components/Home'
import Notepad from './components/Notepad'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
    <Navbar/>
      <Routes>
      
          <Route path='/' element={<Home/>} />
          <Route path='/tools' element={<Tools/>} />
          <Route path='/notepad' element={<Notepad/>} />
    
      </Routes>

    </>
  )
}
