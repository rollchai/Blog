
import React, { useEffect } from 'react'
import '../css/Addblog.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

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
    
  
 </>


             
  
  )
} 


export default Testedit