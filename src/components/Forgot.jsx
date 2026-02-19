import React from 'react'
import '../css/Forgot.css'
import logo from '../assets/Frame 1000005431 copy.png'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import {  useNavigate } from 'react-router-dom'
const Forgot = () => {
  const [forgot, setforgot] = useState("")
 const navigate=useNavigate()

 const handlechange=(e)=>{
 setforgot({
     [e.target.name]:e.target.value
  })
 }
  const forgotdata=async()=>{
    try {
      const data=await axios.post("https://project2-api.bosselt.com/api/user/forgot-password",{email:forgot})
toast.success(data.data.message)
setTimeout(() => {
  navigate('/login')
}, 1000);
    } catch (error) {
      toast.error("Failed to send")
    }
  }
  
  return (
        <div className="d-flex align-items-center vh-100 justify-content-center">
 <div className="forgot-box rounded p-4">
   <div className="text-center gap-3">
            <img className="logo-image gap-6 mt-3 rounded" src={logo} alt=""/>
        </div>
        <div >
                <div className="firstrow gap-1 mb-1">
<div className="firstrow_content "> Forgot password</div>
<div className="fs-regular firstinfo">Please enter your email</div>
</div>

<div className="info_input">
    <label className="d-block">Email </label>
  <input type="email" className="form-control" placeholder="Enter your email" onChange={handlechange}/>
</div>
<button type="button" className=" btn mt-4 "onClick={forgotdata} >Send </button>
        </div>
        </div>
        </div>
  )
}

export default Forgot