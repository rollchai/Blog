import React from "react";
import pathicon from "../assets/Path.png";
import ovalicon from "../assets/Oval.png";
import logo from "../assets/Frame 1000005431.png";
import "../css/Register.css";
import { useState } from "react";
const Register = () => {
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const onsumitbtn = () => {
    alert("register succesfull");
    console.log(username);
    console.log(email);
    console.log(password);
  };
  // console.log(username)
  return (
    <div className="d-flex align-items-center vh-100 justify-content-center">
      <div className="register-box rounded p-4 ">
        <div className=" rounded p-3 gap-3 text-center">
          <img className="blog-img" src={logo} alt="" />
        </div>

        <div className="contentt mx-auto">
          <div className="firstrow gap-1 mb-4">
            <div className="firstrow_content "> Adventure Starts here 🚀</div>
            <div className="fs-regular firstinfo">
              Please sign-Up to your account and start the adventure
            </div>
          </div>

          <div className="labl">
            <label className="d-block">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="mt-4 labl">
            <label className="d-block">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div className="mt-4 labl">
            <label className="d-block">Password</label>
            <input
              type="password"
              className="form-control p-relative"
              placeholder="..........."
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <img className="eyee-icon w-2.6 " src={pathicon} alt="" />
            <img className="ovall-icon w-1" src={ovalicon} alt="" />
          </div>

          <div className="privacy_content mt-4 d-flex align-items-center ">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
            <label>
              I agree to <span> privacy policy & terms </span>
            </label>
          </div>

          <div className="privacy_content mt-4 d-flex align-items-center ">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
            <label>
              Sign Up as <span>Admin </span>
            </label>
          </div>

          <button className="rounded btn mt-4" onClick={onsumitbtn}>
            sign Up
          </button>
          <div className="d-flex justify-content-center">
            <div className="mt-4 sign_in">
              Already have an account?{" "}
              <a href="/login">
                <span>Sign in</span>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
