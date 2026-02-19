import React from 'react'
import logo from "../../assets/Frame 1000005431 copy.png";
import dropdown from "../../assets/Vector.png";
import karthy from "../../assets/Ellipse 14.png"
import icon from "../../assets/Icon.png"
import setttingicon from "../../assets/Icon (1).png"
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify'; 
import '../../css/header.css'
import axios from 'axios';
const Header = () => {
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");
const [showprofile,setshowprofile]=useState(false)
  const navigate=useNavigate()
      useEffect(() => {
        getuserdata();
      }, []);

      const toggledropdown=()=>{
        setshowprofile(!showprofile)
      }
      const logout = () => {
        localStorage.clear("token");
        toast.success("log out successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      };

      
  const getuserdata = async () => {
    try {
      const token = localStorage.getItem("token");
      const data = await axios.get(
        "https://project2-api.bosselt.com/api/user/get-profile",
        {
          headers: {
            Authorization: token,
          },
        },
      );
      console.log(token);
      console.log(data.data.data);
      setuser(data.data.data.name);
      setemail(data.data.data.email);
    } catch (error) {
      toast.error("failed");
    }
  };
  return (
       <section className="bar sticky-top">
            <div className="container">
              <div className="d-flex align-items-center justify-content-between  p-3">
                <div>
                  <img src={logo} alt="" />
                </div>
                <div>
                  <ul className="list-group list-group-horizontal-md align-items-center ">
                  <Link to='/' className='light text-decoration-none'><li className="list-group-item border-0 light">Home</li></Link>
              <Link to='/myblogs' className='light text-decoration-none'> <li className="list-group-item border-0 ">My Blogs</li></Link>   
               <Link to="/contact us" className='light text-decoration-none'><li className="list-group-item border-0 light">Contact us</li></Link>  
                   <div className="profile-wrapper ">
  <div  
    className="ms-4 profilecolor d-flex align-items-center justify-content-center"
    onClick={toggledropdown}
  >
    <img src={karthy} alt="" />
    <h4 className='mt-2'>{user}</h4>
    <img  src={dropdown} alt="" />
  </div>

  {showprofile && (
    <div className="dropdown-menu-custom">
     <Link to="/updateprofile" className='text-decoration-none d-flex'>
     <div>
     <img src={icon} alt=""className='mt-1' />
     </div>
     <div className='ms-3 border-bottom'>
     <p>My Profile</p>
     </div> 
     </Link>
     
     <div className='d-flex'>
      <div className='mt-1'>
        <img src={setttingicon} alt="" />
      </div>
      <div className='ms-3 border-bottom'>
      <p>Log in as admin</p>
      </div>
    </div>
      <button className="logout-btn mt-2" onClick={logout}>Logout</button>
    </div>
  )}
</div>

                  </ul>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Header