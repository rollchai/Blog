import React from 'react'
import '../css/Addblog.css'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
import logo from "../assets/Frame 1000005431 copy.png"
const Addblog = () => {
  const [title, settitle] = useState([])
  const [description, setdescription] = useState([])
  const [image, setimage] = useState([])
  const blogsaved=()=>{
    console.log(title)
    console.log(description)
    console.log(image)
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
  <input type="text" placeholder='write here' className='p-3' onChange={(e)=>settitle(e.target.value)} />
    </div>
  </div>
  
  <div className='areatext container mt-4'>
    <div className='label-size'>
    <label>Description</label>
    </div>
    <div>
    <textarea name="message" id="" placeholder='write here' className='p-3' onChange={(e)=>setdescription(e.target.value)}/>
    </div>
  </div>

  <div className='imagespace container mt-4'>
    <div className='filelabel'>
    <label>Upload image</label>
    </div>
    <div>

    <input type="file" className='p-3'onChange={(e)=>setimage(e.target.value)} />
    </div>
  <button className='p-3 rounded mt-4' onClick={blogsaved}>save</button>
  </div>
    
 
 </>


             
  
  )
}

export default Addblog
