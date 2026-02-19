import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Testget = () => {
const [Blog, setBlog] = useState([])
const navigate=useNavigate()

    useEffect(() => {
        dataa()
    }, [])
    
    const dataa=async()=>{
      const getdata=await axios.get("https://project2-api.bosselt.com/api/user/getDummyBlogs")
         console.log(getdata.data.data) 

        setBlog(getdata.data.data.blogs)   
    }

    const deletedata=async(_id)=>{
   try {
       const data=await axios.delete(`https://project2-api.bosselt.com/api/user/delDummyBlog/${_id}`) 
  setBlog((prevBlog) => 
      prevBlog.filter((item) => item._id !== _id)
    );
   } catch (error) {
    console.log(error)
   }
    }

 
  return (
     <div className="container">
          <div className="row g-4 pt-5 align-itmes">
          {
Blog.map((item) => (
    <div className="col-md-4">
           <div className="card-box shadow p-3 ">
                   <div className="top-profile d-flex align-items-center">
                        <h1>Title</h1>
                     <div className='gap-3 ms-3'>
                       <h2>{item.title}</h2>
                     </div>
                   </div>
                         <small>
        Posted on:{" "}
        {new Date(item.createdAt).toLocaleDateString()}
      </small>
                   <div>
                   <h3 className="mt-3">
                   {item.description}
                   </h3>
                   <div className='d-flex'>
                    <div>
                   <button style={{
                    "width":"181px"
                   }} className='btn' onClick={()=>deletedata(item._id)}>Delete</button>
                   </div>
                   <div>
                   <button style={{
                    "width":"181px",
                    "backgroundColor":"red",
                  "marginLeft":"15px"
                   }} className='btn btn-danger'onClick={()=>{
                    navigate(`/edit/${item._id}/${item.title}/${item.description}`)
                   }}>Edit</button>
                   </div>
                   </div>       
                   </div>
                   
                 </div>

    </div>
))}
          </div>
          </div>
  )
}

export default Testget