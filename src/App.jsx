import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import Forgot from './components/Forgot'
import Home from './components/Home'
import AfterLoginhome from './components/AfterLoginhome'
import { Routes,Route } from 'react-router-dom'
import Addblog from './components/Addblog'
function App() {

  return (
    <>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/Login'element={<Login/>}/>
      <Route path='/Forgot'element={<Forgot/>}/>
      <Route path='/userloginhome' element={<AfterLoginhome/>}/>
      <Route path='/add' element={<Addblog/>}/>
    </Routes>
    </>
  
    
    
  )
}

export default App
