import React from 'react'
import footerlogo from "../../assets/Frame 1000005431 (1).png"
import applogo from "../../assets/Frame 10000053411111.png"
import mail from "../../assets/mail.png"
import locatiion from "../../assets/location.png"
import call from "../../assets/call.png"
const Footer = () => {
  return (
    <section className="back pt-5 pb-4 mt-5">
           <div className="container">
             <div className="row align-items-start">
               {/* <!-- Left Content --> */}
               <div className="col-md-5">
                 <div className="p-3">
                   <img src={footerlogo} alt="" className="mb-3" />
                   <p className="mt-3">
                     Most developer friendly & highly <br /> customisable Admin
                     Dashboard Template.
                   </p>
                   <img src={applogo} alt="" className="mt-3" />
                 </div>
               </div>
   
               {/* <!-- Right Links --> */}
               <div className="col-md-7 lh-lg mt-3">
                 <div class="row">
                   <div class="col-md-4">
                     <h5>Company</h5>
                     <p>About us</p>
                     <p>Blogs</p>
                   </div>
   
                   <div class="col-md-4 ">
                     <h5>Quick Links</h5>
                     <p>Terms of service</p>
                     <p>Privacy Policy</p>
                     <p>Get in Touch</p>
                   </div>
   
                   <div class="col-md-4 ">
                     <h5>Contact us</h5>
                     <div class="d-flex align-items-center">
                       <img src={mail} alt="" />
                       <p class="ms-2">info@companyname.com</p>
                     </div>
                     <div class="d-flex align-items-center">
                       <img src={call} alt="" />
                       <p class="ms-2">(123) 456-789</p>
                     </div>
                     <div class="d-flex align-items-center">
                       <img src={locatiion} alt="" />
                       <p class="ms-2">1234 Street Name, State, Zip Code</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <hr />
             <div className="d-flex justify-content-center align-items-center">
               <div>© 2025 Blogs, All rights reserved</div>
             </div>
           </div>
         </section>
  )
}

export default Footer