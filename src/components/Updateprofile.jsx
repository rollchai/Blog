import  { useState } from 'react'
import { toast  } from 'react-toastify'  
import frame from "../assets/profileframe.png"
import "../css/Updateprofile.css"
import axios from 'axios'
import Header from './comman/header'
import Footer from './comman/Footer'
import { Formik, useFormik } from 'formik'
const Updateprofile = () => {
   const [image, setimage] = useState(null)
  const [imagepreview, setimagepreview] = useState(null)

const formik=useFormik({
  initialValues:{
     name:"",
  email:"",
  image:null
  },
  validate:(values)=>{
    const errors={}
if(!values.name){
errors.name="name is required"
}
if(!values.email){
errors.email="email is required"
}
if(!values.image){
errors.image="image is required"
}
return errors
  },
  onSubmit:async(values)=>{
try {
    const token=localStorage.getItem('token')
  const sendData=new FormData()
  sendData.append("name",values.name)
  sendData.append("email",values.email)
  sendData.append("image",values.image)
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
})


  const removeimage=()=>{
    setimage(null)
    setimagepreview(null)
  }


  return (
    <>
    <Header/>
      <div className=' container profile'>
  <h1>My Profile</h1></div>
  <form onSubmit={formik.handleSubmit}>
      <div className='textspace container '>
        <div className='d-flex'>

{imagepreview ? (
  <>
  <img src={imagepreview} alt="" className='mt-3 position-relative' style={{width:"100px",height:"100px"}}/>
  <button type="button"
          onClick={removeimage}
          className="postion-absolute btnsty">×</button>
</>
  ):(
  <>
  <img src={frame} alt="" />
  <input type="file" className='like' name='image'  onChange={(event)=>{
  const file=event.currentTarget.files[0]
  if(file){
    formik.setFieldValue("image",file)
    setimage(file)
    setimagepreview(URL.createObjectURL(file))
    
  }
}
}/>
</>)}


   </div>
   {formik.errors.image&&(
    <small className='text-danger'>{formik.errors.image}</small>
   )}
  <div className='textspace container mt-5 '>

  <label>Name</label>
    
    <div>
  <input type="text" value={formik.values.name} name='name'  placeholder='write here' className='p-3' onChange={formik.handleChange}/>
    </div>
      {formik.errors.name&&(
    <small className='text-danger'>{formik.errors.name}</small>
   )}
  </div>
  
  <div className='textspace container mt-4'>
    <div className='label-size'>
    <label>Email</label>
    </div>
    <div>
    <input  type="email" name='email' value={formik.values.email} id="" placeholder='write here' className='p-3' onChange={formik.handleChange}/>
    </div>
      {formik.errors.email&&(
    <small className='text-danger'>{formik.errors.email}</small>
   )}
  </div>

  <div className='imagespace container mt-4'>
    {/* <div className='filelabel'>
    <label>Upload image</label>
    </div>
    <div>

    <input type="file" className='p-3'onChange={(e)=>setimage(e.target.value)} />
    </div> */}
  <button className='p-3 rounded mt-4' type='submit'>save</button>
  </div>
       </div>
       </form>
       <Footer/>

 </>
  )
}

export default Updateprofile