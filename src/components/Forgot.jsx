import React from 'react'
import '../css/Forgot.css'
import logo from '../assets/Frame 1000005431 copy.png'
import { useState } from 'react'
const Forgot = () => {
  const [forgot, setforgot] = useState()
  const forgotrequest=()=>{
    console.log(forgot)
  }
  return (
    
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
  <input type="email" className="form-control" placeholder="Enter your email" onChange={(e)=>setforgot(e.target.value)}/>
</div>
<button type="button" className=" btn mt-4 " onClick={forgotrequest}>Send </button>
        </div>
        </div>
  )
}

export default Forgot