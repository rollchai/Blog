import React, { useEffect } from 'react'
import '../css/Addblog.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer  } from 'react-toastify'

// import { Link } from 'react-router-dom'
import logo from "../assets/Frame 1000005431 copy.png"
const Addblog = () => {
 
const [formData, setformData] = useState({
  title:"",
  description:"",
  file:null
})
  const navigate=useNavigate()

  const handlechange=(e)=>{
    setformData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const appblog=async()=>{
    const sendData=new FormData()
    sendData.append("title",formData.title)
    sendData.append("description",formData.description)
    sendData.append("image",formData.file)
    try {
      const token=localStorage.getItem("token")
  const data=await axios.post("https://project2-api.bosselt.com/api/user/add-Blog",sendData,{
    headers:{
      Authorization:token
    }
  })
  toast.success("Blog Added Succesfully")
  navigate("/")
  console.log(data)
} catch (error) {
  console.log("REAL ERROR:", error.response?.data);
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
  <div className='textspace container mt-5 '>
  <h1>Add Blog</h1>


  <label>Title</label>
    
    <div>
  <input type="text" name='title' placeholder='write here' className='p-3' onChange={handlechange} />
    </div>
  </div>
  
  <div className='areatext container mt-4'>
    <div className='label-size'>
    <label>Description</label>
    </div>
    <div>
    <textarea  name="description" id="" placeholder='write here' className='p-3' onChange={handlechange}/>
    </div>
  </div>

  <div className='imagespace container mt-4'>
    <div className='filelabel'>
    <label>Upload image</label>
    </div>
    <div>

    <input type="file" name='file' className='p-3'onChange={(e)=>setformData({...formData,
      file:e.target.files[0]}
    )} />
    </div>
  <button className='p-3 rounded mt-4' onClick={appblog}>save</button>
  </div>
    
   <ToastContainer /> 
 </>


             
  
  )
} 

export default Addblog
