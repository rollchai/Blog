import React, { useEffect } from 'react'
import '../css/Home.css'
import dropdown from "../assets/Vector.png"
import karthy from '../assets/Ellipse 14.png'
import firstcard_image from '../assets/Container (7).png'
import brrokly from '../assets/Ellipse 14 (1).png'
import secondcard_image from '../assets/Container.png'
import marvin from '../assets/Ellipse 14 (2).png'
import thirdcard_image from "../assets/Container (1).png"
import  jerome from "../assets/Ellipse 15.png"
import forth_image from '../assets/Container (2).png'
import cody from '../assets/Ellipse 14 (3).png'
import fifth_image from '../assets/Container (3).png'
import ralph from '../assets/Ellipse 14 (4).png'
import sixth from '../assets/Container (4).png'
import wade from '../assets/Ellipse 14 (3).png'
import seventh from '../assets/Container (5).png'
import annete from '../assets/Ellipse 14 (6).png'
import eighth from "../assets/Container (6).png"
import albert from "../assets/Ellipse 14 (7).png"
import ninth from "../assets/Container (7).png"
import logo from "../assets/Frame 1000005431 copy.png"
import phone from "../assets/call.png"
import location from "../assets/location.png"
import mail from "../assets/mail.png"
import applogo from "../assets/Frame 10000053411111.png"
import footer_Logo from "../assets/Frame 1000005431 (1).png"
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer } from "react-toastify";
import { useState } from 'react'
import axios from 'axios'
const Home = () => {
  const [user, setuser] = useState("")
  const [email, setemail] = useState("")
  const [blog, setblog] = useState([])
  const navigate=useNavigate()

    useEffect(() => {
  getuserdata() 
getblogs()

  }, [])
  

  const logout=()=>{
    localStorage.clear("token");
toast.success("log out successfully")
setTimeout(() => {
  navigate("/login")
}, 2000);
  }


const getuserdata=async ()=>{
  try {
    const token=localStorage.getItem("token")
    const data=await axios.get("https://project2-api.bosselt.com/api/user/get-profile",{
      headers:{
        Authorization:token
      }
      
    })
    console.log(token)
    console.log(data)
    setuser(data.data.data.name)
    setemail(data.data.data.email)
  } catch (error) {
    toast.error("failed")
  }
}
const getblogs=async()=>{
      // debugger
      try {
        const token=localStorage.getItem("token")
        const data=await axios.get("https://project2-api.bosselt.com/api/user/user-blogs",{
          headers:{
            Authorization:token
          }
        })
        setblog(data.data.data.blogs)
        console.log(data.data.data.blogs)

      } catch (error) {
        toast(data.data.error)
      }
    }

  return (
     <>
   <section className="bar sticky-top">
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
          <button className="btn custom-btn" onClick={logout}>Log Out</button>
    
        </li>
        <div className='ms-4 profilecolor d-flex align-items-center justify-content-center'>
          <img src={karthy} alt="" />
        <h4 >{user}</h4>  
        <img src={dropdown} alt="" className='mb-2' />
        </div>
        <button className='btn btn-primary custom-btn ms-3' onClick={()=>navigate(`/updateprofile`)}>my profile</button>
      </ul>
    </div>
    </div>
</div>
  </section>
<div className='d-flex justify-content-between space text-align-center container '>
  <h3 className='r'>My Blogs</h3>
  <a href='/add'>
  <button className='btn btn-primary custombtn'>Add Blog</button>
  </a>
</div>
<div className="container">
  <div className="row g-4 pt-5">

    {blog && blog.map((item, index) => (
      <div className="col-md-4" key={index}>
        <div className="card-box shadow p-3">
          
          <div className="top-profile d-flex align-items-center">
            <img src={karthy} alt="" className="mb-3" />
            <div className="ms-3">
              <h2>{item.title}</h2>
              <p className="newly">Posted At: {new Date(item.createdAt).toLocaleDateString()}</p>
            </div>
          </div>

          <div>
            <img
              className="img-fluid rounded"
            src={`https://project2-api.bosselt.com/uploads/${item.image}`}

              alt=""
            />
          </div>

          <div>
            <h3 className="mt-3">
              {item.description}
            </h3>
          </div>

        </div>
      </div>
    ))}

  </div>
</div>

<section className="back pt-5 pb-4 mt-5">
  <div className="container">
    <div className="row align-items-start">

      {/* <!-- Left Content --> */}
      <div className="col-md-5">
        <div className="p-3">
          <img src={footer_Logo} alt="" className="mb-3"/>
          <p className="mt-3">
            Most developer friendly & highly <br/> customisable Admin Dashboard Template.
          </p>
          <img src={applogo} alt="" className="mt-3"/>
        </div>
      </div>

      {/* <!-- Right Links --> */}
      <div className="col-md-7 lh-lg mt-3">
        <div class= "row">

          <div class="col-md-4">
            <h5>Company</h5>
            <p>About us</p>
            <p>Blogs</p>
          </div>

          <div class="col-md-4 ">
            <h5>Quick Links</h5>
            <p >Terms of service</p>
            <p >Privacy Policy</p>
            <p>Get in Touch</p>
          </div>

          <div class="col-md-4 ">
            <h5>Contact us</h5>
            <div class="d-flex align-items-center">
            <img src={mail} alt=""/>
            <p class="ms-2">info@companyname.com</p>
            </div>
            <div class="d-flex align-items-center">
            <img src={phone} alt=""/>
            <p class="ms-2">(123) 456-789</p>
            </div>
            <div class="d-flex align-items-center">
            <img src={location} alt=""/>
            <p class="ms-2">1234 Street Name, State, Zip Code</p>
            </div>
          </div>

        </div>
      </div>

    </div>
    <hr/>
    <div className="d-flex justify-content-center align-items-center">
      <div>© 2025 Blogs, All rights reserved</div>
    </div>
  </div>
</section>
  </>
  )
}

export default Home