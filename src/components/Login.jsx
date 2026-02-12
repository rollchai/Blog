import React from 'react'
import '../css/Login.css'
import pathicon from '../assets/Path.png' 
import ovalicon from '../assets/Oval.png'
import logo from '../assets/Frame 1000005431.png'
import { useState } from 'react'
const Login = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const onlogin=()=>{
    console.log(email)
    console.log(password)
    }
  return (
      <div className="login-box rounded p-4">
        <div className=" text-center gap-3">
            <img className="logo-image gap-6 mt-3" src={logo} alt=""/>
        </div>
        <div className="content mx-auto gap-6">
 
            <div className="firstrow gap-1 mb-4">
<div className="firstrow_content "> Welcome to Blogs! 👋🏻</div>
<div className="fs-regular firstinfo">Please sign-in to your account and start the adventure</div>
</div>

<div className="info_input">
    <label className="d-block">Email or username</label>
    <input type="email" className="form-control" placeholder="Enter your email or username" onChange={(e)=>setemail(e.target.value)}/>
</div>

<div className="mt-4 info_input">
    <label className="d-block">Password</label>
    <input type="password" className="form-control" placeholder="............" onChange={(e)=>setpassword(e.target.value)}/>
    <img className="eye-icon w-2.6 " src={pathicon} alt=""/>
<img className="oval-icon w-1" src={ovalicon} alt=""/>
</div>
 {/* checkbox */}
 <div className="privacy_content mt-4 d-flex">
 <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
    <label>Remember Me</label>
   <a href='/forgot'> <div className="forgot">Forgot Password?</div></a>
 </div>
<button className="rounded btn mt-4 " onClick={onlogin}>Login</button>
<div className="d-flex justify-content-center gap new">
<div className="mt-4 sign_in">New on our platform? <a href='/register'> <span> Create an account</span></a> </div>
</div>
        </div>
    </div>
  )
}

export default Login