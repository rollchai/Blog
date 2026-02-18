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
import Testget from './components/Testget'
import Testedit from './components/Testedit'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/protectedRoutes/ProtectedRoute'
import Updateprofile from './components/Updateprofile'
function App() {

  return (
    <>
    <Routes>
      <Route path='/'element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/Login'element={<Login/>}/>
      <Route path='/Forgot'element={<Forgot/>}/>
      <Route path='/userloginhome' element={<AfterLoginhome/>}/>
      <Route path='/add' element={<Addblog/>}/>
      <Route path='/edit/:id/:title/:description' element={<Testedit/>}/>
      <Route path='/testget' element={<Testget/>}/>
      <Route path='/updateprofile' element={<Updateprofile/>}/>
    </Routes>
    <ToastContainer/>
    </>
  
    
    
  )
}

export default App
