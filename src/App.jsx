import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import Home from "./components/Home";
import AfterLoginhome from "./components/AfterLoginhome";
import { Routes, Route } from "react-router-dom";
import Addblog from "./components/Addblog";
import Testget from "./components/Testget";
import Testedit from "./components/Testedit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute";
import Updateprofile from "./components/Updateprofile";
import Updateblog from "./components/Updateblog";
import Singleblog from "./components/Singleblog";
import GlobalBlogs from "./components/GlobalBlogs";

function App() {
  return (
    <>
<Routes>
  {/* Public Routes */}
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/forgot" element={<Forgot />} />

  {/* Protected Routes */}
  <Route element={<ProtectedRoute />}>
    <Route path="/myblogs" element={<Home />} />
    <Route path="/userloginhome" element={<AfterLoginhome />} />
    <Route path="/add" element={<Addblog />} />
    <Route path="/edit/:id/:title/:description" element={<Testedit />} />
    <Route path="/testget" element={<Testget />} />
    <Route path="/updateprofile" element={<Updateprofile />} />
    <Route path="/updateblog" element={<Updateblog />} />
    <Route path="/singleblog" element={<Singleblog />} />
    <Route path="/" element={<GlobalBlogs/>}/>
  </Route>
</Routes>


      <ToastContainer />
    </>
  );
}

export default App;
