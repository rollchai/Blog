import React from 'react'
import '../css/AfterLoginhome.css'
import { Link } from 'react-router-dom'
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
const   AfterLoginhome = () => {
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
<div className='d-flex justify-content-between space text-align-center container '>
  <h3 className='r'>My Blogs</h3>
  <a href='/add'>
  <button className='btn btn-primary custombtn'>Add Blog</button>
  </a>
</div>
      <div className="container">
            <div className="row g-4 pt-5 align-itmes">
              <div className="col-md-4 ">
                <div className="card-box shadow p-3 ">
                  <div className="top-profile d-flex align-items-center">
                    <img src={karthy} alt="" className="mb-3" />
                    <div className='gap-3 ms-3'>
                      <h2>Kathryn Murphy</h2>
                      <p className="newly">Posted 3 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img  className="img-fluid" src={firstcard_image} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                    In the vibrant world of wellness, countless elements shape our
                    physical and mental states. From the foods we consume to the
                    environments , each aspect contributes to our overall
                    health. Delving into these relationships can pave the way for
                    enhanced vitality.
                  </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={brrokly} alt="" className="mb-3" />
                    <div className='gap-3 ms-3' >
                      <h2 >Brooklyn Simmons</h2>
                      <p className='newly'>Posted 5 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img className="img-fluid" src={secondcard_image} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                    In the colorful realm of well-being, various factors influence our physical and mental health. From the meals we enjoy to the spaces we occupy, every detail plays a role in our overall wellness. Exploring these connections can lead to greater energy and health.
                  </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={marvin} alt="" className="mb-3" />
                    <div className="gap-3 ms-3">
                      <h2>Marvin McKinney</h2>
                      <p className="newly">Posted 6 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img className="img-fluid" src={thirdcard_image} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                    In the lively landscape of health, numerous elements affect our physical and mental well-being. The nutrition we choose and the environments we live in both significantly impact our health. Investigating these links can unlock pathways to improved vitality.
                  </h3>
                  </div>
                </div>
              </div>  
            
            {/* <!-- second row --> */}
              <div className="col-md-4 ">
                <div className="shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={jerome} alt="" className="mb-3" />
                    <div className="gap-3 ms-3">
                      <h2>Jerome Bell</h2>
                      <p className="newly">Posted 2 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img className="img-fluid" src={forth_image} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                  In the lively world of wellness, various aspects influence  mental and physical health. From the meals we consume to the spaces each factor contributes to our overall well-being. Exploring these connections can lead to improved vitality.
                  </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className=" shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={cody} alt="" className="mb-3"/>
                    <div className="gap-3 ms-3">
                      <h2>Cody Fisher</h2>
                      <p className="newly">Posted 4 days ago</p>
                    </div>
                  </div>
                  <div >
                  <img className="img-fluid" src={fifth_image} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                    In the colorful landscape of wellness, numerous elements shape our mental and physical states. The environments we engage with both significantly affect our health. Delving into these relationships can pave the way for greater vitality.
                  </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={ralph} alt="" className="mb-3" />
                    <div className="gap-3 ms-3">
                      <h2>Ralph Edwards</h2>
                      <p className="newly">Posted 2 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img className="img-fluid" src={sixth} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                    In the vibrant sphere of health, countless factors influence our mental and physical well-being. From the foods we enjoy to the places we inhabit, each aspect plays a role in   health. Exploring these connections can lead to enhanced vitality.
                  </h3>
                  </div>
                </div>
              </div>
           
      
        {/* <!-- third row --> */}
              <div className="col-md-4">
                <div className="shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={wade} alt="" className="mb-3" />
                    <div className="gap-3 ms-3">
                      <h2>Wade Warren</h2>
                      <p className="newly">Posted 10 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img className="img-fluid" src={seventh} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                    Within the dynamic sphere of wellness, many factors shape our dynamic  mental and physical conditions. The diets we follow and the places we call home are just a few components that influence our health. Understanding these  can enhance our overall vitality.
                  </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={annete} alt="" className="mb-3" />
                    <div className="gap-3 ms-3">
                      <h2>Annette Black</h2>
                      <p className="newly">Posted 11 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img className="img-fluid" src={eighth} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                    In the energetic  and colorful world of health, countless factors mold our mental and physical states. From the dishes we savor to the surroundings we dwell in, each detail contributes to our wellness. Examining these connections can lead to a boost in vitality.
                  </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4  ">
                <div className="shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={albert} alt="" className="mb-3" />
                    <div className="gap-3 ms-3">
                      <h2>Albert Flores</h2>
                      <p className="newly">Posted 12 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img className="img-fluid" src={ninth} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                   In the vibrant domain of wellness, elements impacts our mental and physical health. The foods we eat and the environments we choose to live in play crucial roles in our overall well-being. Investigating these relationships can foster enhanced vitality.
                  </h3>
                  </div>
                </div>
              </div>
            </div>
            </div>
       <div className="container">
            <div className="row g-4 pt-5 align-itmes">
              <div className="col-md-4 ">
                <div className="card-box shadow p-3 ">
                  <div className="top-profile d-flex align-items-center">
                    <img src={karthy} alt="" className="mb-3" />
                    <div className='gap-3 ms-3'>
                      <h2>Kathryn Murphy</h2>
                      <p className="newly">Posted 3 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img  className="img-fluid" src={firstcard_image} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                    In the vibrant world of wellness, countless elements shape our
                    physical and mental states. From the foods we consume to the
                    environments , each aspect contributes to our overall
                    health. Delving into these relationships can pave the way for
                    enhanced vitality.
                  </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={brrokly} alt="" className="mb-3" />
                    <div className='gap-3 ms-3' >
                      <h2 >Brooklyn Simmons</h2>
                      <p className='newly'>Posted 5 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img className="img-fluid" src={secondcard_image} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                    In the colorful realm of well-being, various factors influence our physical and mental health. From the meals we enjoy to the spaces we occupy, every detail plays a role in our overall wellness. Exploring these connections can lead to greater energy and health.
                  </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={marvin} alt="" className="mb-3" />
                    <div className="gap-3 ms-3">
                      <h2>Marvin McKinney</h2>
                      <p className="newly">Posted 6 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img className="img-fluid" src={thirdcard_image} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                    In the lively landscape of health, numerous elements affect our physical and mental well-being. The nutrition we choose and the environments we live in both significantly impact our health. Investigating these links can unlock pathways to improved vitality.
                  </h3>
                  </div>
                </div>
              </div>  
            
            {/* <!-- second row --> */}
              <div className="col-md-4 ">
                <div className="shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={jerome} alt="" className="mb-3" />
                    <div className="gap-3 ms-3">
                      <h2>Jerome Bell</h2>
                      <p className="newly">Posted 2 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img className="img-fluid" src={forth_image} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                  In the lively world of wellness, various aspects influence  mental and physical health. From the meals we consume to the spaces each factor contributes to our overall well-being. Exploring these connections can lead to improved vitality.
                  </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className=" shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={cody} alt="" className="mb-3"/>
                    <div className="gap-3 ms-3">
                      <h2>Cody Fisher</h2>
                      <p className="newly">Posted 4 days ago</p>
                    </div>
                  </div>
                  <div >
                  <img className="img-fluid" src={fifth_image} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                    In the colorful landscape of wellness, numerous elements shape our mental and physical states. The environments we engage with both significantly affect our health. Delving into these relationships can pave the way for greater vitality.
                  </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={ralph} alt="" className="mb-3" />
                    <div className="gap-3 ms-3">
                      <h2>Ralph Edwards</h2>
                      <p className="newly">Posted 2 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img className="img-fluid" src={sixth} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                    In the vibrant sphere of health, countless factors influence our mental and physical well-being. From the foods we enjoy to the places we inhabit, each aspect plays a role in   health. Exploring these connections can lead to enhanced vitality.
                  </h3>
                  </div>
                </div>
              </div>
           
      
        {/* <!-- third row --> */}
              <div className="col-md-4">
                <div className="shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={wade} alt="" className="mb-3" />
                    <div className="gap-3 ms-3">
                      <h2>Wade Warren</h2>
                      <p className="newly">Posted 10 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img className="img-fluid" src={seventh} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                    Within the dynamic sphere of wellness, many factors shape our dynamic  mental and physical conditions. The diets we follow and the places we call home are just a few components that influence our health. Understanding these  can enhance our overall vitality.
                  </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={annete} alt="" className="mb-3" />
                    <div className="gap-3 ms-3">
                      <h2>Annette Black</h2>
                      <p className="newly">Posted 11 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img className="img-fluid" src={eighth} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                    In the energetic  and colorful world of health, countless factors mold our mental and physical states. From the dishes we savor to the surroundings we dwell in, each detail contributes to our wellness. Examining these connections can lead to a boost in vitality.
                  </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4  ">
                <div className="shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={albert} alt="" className="mb-3" />
                    <div className="gap-3 ms-3">
                      <h2>Albert Flores</h2>
                      <p className="newly">Posted 12 days ago</p>
                    </div>
                  </div>
                  <div>
                  <img className="img-fluid" src={ninth} alt="" />
                  </div>
                  <div>
                  <h3 className="mt-3">
                   In the vibrant domain of wellness, elements impacts our mental and physical health. The foods we eat and the environments we choose to live in play crucial roles in our overall well-being. Investigating these relationships can foster enhanced vitality.
                  </h3>
                  </div>
                </div>
              </div>
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
                    <div className= "row">
            
                      <div className="col-md-4">
                        <h5>Company</h5>
                        <p>About us</p>
                        <p>Blogs</p>
                      </div>
            
                      <div className="col-md-4 ">
                        <h5>Quick Links</h5>
                        <p >Terms of service</p>
                        <p >Privacy Policy</p>
                        <p>Get in Touch</p>
                      </div>
            
                      <div className="col-md-4 ">
                        <h5>Contact us</h5>
                        <div className="d-flex align-items-center">
                        <img src={mail} alt=""/>
                        <p className="ms-2">info@companyname.com</p>
                        </div>
                        <div className="d-flex align-items-center">
                        <img src={phone} alt=""/>
                        <p className="ms-2">(123) 456-789</p>
                        </div>
                        <div className="d-flex align-items-center">
                        <img src={location} alt=""/>
                        <p className="ms-2">1234 Street Name, State, Zip Code</p>
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

export default AfterLoginhome



