import '../css/Login.css'
import pathicon from '../assets/Path.png' 
import ovalicon from '../assets/Oval.png'
import logo from '../assets/Frame 1000005431.png'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Login = () => {
    const [formData, setformData] = useState({
        email:"",
        password:""
    })
    const navigate=useNavigate()

    const changehandler=(e)=>{
setformData({
    ...formData,
    [e.target.name]:e.target.value
})
    }
  const loginpage=async()=>{
    const data=await axios.post("https://project2-api.bosselt.com/api/user/login",formData)
console.log(data)
if(data.data.success){
    const tok=data.data.data.token
    localStorage.setItem("token",tok)
    console.log(tok)
    toast.success(data.data.message)
    setTimeout(() => {
        navigate(`/`)
    }, 2000);
}
else{
    toast.error("failed")
}
  }
  return (
    <div className="d-flex align-items-center vh-100 justify-content-center">
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
    <input type="email" name='email' className="form-control" placeholder="Enter your email or username" onChange={changehandler}/>
</div>

<div className="mt-4 info_input">
    <label className="d-block">Password</label>
    <input type="password" name='password' className="form-control" placeholder="............" onChange={changehandler}/>
    <img className="eye-icon w-2.6 " src={pathicon} alt=""/>
<img className="oval-icon w-1" src={ovalicon} alt=""/>
</div>
 {/* checkbox */}
 <div className="privacy_content mt-4 d-flex">
 <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
    <label>Remember Me</label>
   <Link to='/forgot'> <div className="forgot">Forgot Password?</div></Link>
 </div>
<button className="rounded btn mt-4 " onClick={loginpage}>Login</button>
<div className="d-flex justify-content-center gap new">
<div className="mt-4 sign_in">New on our platform? <Link to='/register'> <span> Create an account</span></Link> </div>
</div>
        </div>
    </div>
    </div>
  )
}

export default Login