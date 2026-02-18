import React, { useState } from 'react'
import logo from "../assets/Frame 1000005431 copy.png"
import { toast,ToastContainer  } from 'react-toastify'  
import frame from "../assets/profileframe.png"
import "../css/Updateprofile.css"
import axios from 'axios'
const Updateprofile = () => {
const [formData, setformData] = useState({
  name:"",
  email:"",
  image:null
})
const handlechange=(e)=>{
setformData({
  ...formData,
  // ??
  [e.target.name]:e.target.value
})
}

const updateprofile=async()=>{
  try {
    const token=localStorage.getItem('token')
        const sendData = new FormData();
    sendData.append("name", formData.name);
    sendData.append("email", formData.email);
    sendData.append("image", formData.image);
    const data= await axios.patch("https://project2-api.bosselt.com/api/user/update-profile",sendData,{
      headers:{
        Authorization:token,

      }
    })
    console.log(data)
    toast.success("succesfully update")
  } catch (error) {
  console.log(error.response?.data);
}

}

  return (
    <>
<section className="nav sticky-top">
         <div className="container">
      <div className="d-flex align-items-center justify-content-between  p-3">
        
        <div>
          <img src={logo} alt=""/>
        </div>
        <div>
          <ul className="list-group list-group-horizontal-md align-items-center ">
            <li className="list-group-item border-0 light">Home</li>
            <li className="list-group-item border-0 light">My Blogs</li>
            <li className="list-group-item border-0 light">Contact us</li>
            <li className="list-group-item border-0 p-0 ms-2  ">
                <a href='/register'>
              <button className="btn btn-primary custom-btn">Sign In</button>
              </a>
            </li>
          </ul>
        </div>
        </div>
    </div>
      </section>
      <div className=' container profile'>
  <h1>My Profile</h1></div>
      <div className='textspace container '>
        <div className='d-flex'>
<img src={frame} alt="" className='mt-3'  />
<input type="file" className='like' name='image'  onChange={(e)=>setformData({
  ...formData,
  image:e.target.files[0]
})}/>

   </div>
  <div className='textspace container mt-5 '>

  <label>Name</label>
    
    <div>
  <input type="text" value={formData.name} name='name'  placeholder='write here' className='p-3'onChange={handlechange}/>
    </div>
  </div>
  
  <div className='textspace container mt-4'>
    <div className='label-size'>
    <label>Email</label>
    </div>
    <div>
    <input  type="email" name='email' value={formData.email} id="" placeholder='write here' className='p-3' onChange={handlechange}/>
    </div>
  </div>

  <div className='imagespace container mt-4'>
    {/* <div className='filelabel'>
    <label>Upload image</label>
    </div>
    <div>

    <input type="file" className='p-3'onChange={(e)=>setimage(e.target.value)} />
    </div> */}
  <button className='p-3 rounded mt-4' onClick={updateprofile}>save</button>
  </div>
       </div>
   <ToastContainer /> 
 </>
  )
}

export default Updateprofile