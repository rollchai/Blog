import  { useState } from 'react'
import { toast  } from 'react-toastify'  
import frame from "../assets/profileframe.png"
import "../css/Updateprofile.css"
import axios from 'axios'
import Header from './comman/header'
import Footer from './comman/Footer'
const Updateprofile = () => {
const [formData, setformData] = useState({
  name:"",
  email:"",
  image:null
})
const handlechange=(e)=>{
setformData({
  ...formData,
  [e.target.name]:e.target.value
})
}
const handlechangefile=(e)=>{
  setformData({
    ...formData,
  [e.target.name]:e.target.files[0]
  })
}
const updateprofile=async()=>{
try {
    const token=localStorage.getItem('token')
  const sendData=new FormData()
  sendData.append("name",formData.name)
  sendData.append("email",formData.email)
  sendData.append("image",formData.image)
  const data=await axios.patch("https://project2-api.bosselt.com/api/user/update-profile",sendData,{
    headers:{
      Authorization:token
    }
  })
  console.log(data.data)
  toast.success(data.data.message)
} catch (error) {
  toast.error("unable to update")
}
}
  return (
    <>
    <Header/>
      <div className=' container profile'>
  <h1>My Profile</h1></div>
      <div className='textspace container '>
        <div className='d-flex'>
<img src={frame} alt="" className='mt-3'  />
<input type="file" className='like' name='image'  onChange={handlechangefile}/>

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
       <Footer/>

 </>
  )
}

export default Updateprofile