
import React, { useEffect } from 'react'
import '../css/Addblog.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { toast,ToastContainer  } from 'react-toastify'

import logo from "../assets/Frame 1000005431 copy.png"
const Testedit = () => {
   const [Blogtitle, setBlogtitle] = useState("")
  const [Blogdescription, setBlogdescription] = useState("")
  const navigate=useNavigate()
const {id,title,description}=useParams()

 useEffect(() => {
     console.log("Params:", id, title, description) 
    if (title && description) {
      setBlogtitle(title)
      setBlogdescription(description)
    }
  }, [title, description])

  const editfun=async()=>{
       let payload={
      title:Blogtitle,
      description:Blogdescription
    }
    const data=await axios.put(`https://projsect2-api.bosselt.com/api/user/updateDummyBlog/${id}`,payload)
toast.success("blog uploded succesfully")
setTimeout(() => {
  navigate("/testget")
}, 2000);
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
  <input type="text" value={Blogtitle} placeholder='write here' className='p-3' onChange={(e)=>setBlogtitle(e.target.value)} />
    </div>
  </div>
  
  <div className='areatext container mt-4'>
    <div className='label-size'>
    <label>Description</label>
    </div>
    <div>
    <textarea name="message" id="" value={Blogdescription} placeholder='write here' className='p-3' onChange={(e)=>setBlogdescription(e.target.value)}/>
    </div>
  </div>

  <div className='imagespace container mt-4'>
    {/* <div className='filelabel'>
    <label>Upload image</label>
    </div>
    <div>

    <input type="file" className='p-3'onChange={(e)=>setimage(e.target.value)} />
    </div> */}
  <button className='p-3 rounded mt-4' onClick={editfun}>Edit</button>
  </div>
    
   <ToastContainer /> 
 </>


             
  
  )
} 


export default Testedit