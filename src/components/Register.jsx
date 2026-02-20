import pathicon from "../assets/Path.png";
import ovalicon from "../assets/Oval.png";
import logo from "../assets/Frame 1000005431.png";
import "../css/Register.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
const Register = () => {
 
  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
    },
    validate:(values)=>{
      const errors={}
      if(!values.name){
errors.username="username is required"
      }
      if(!values.email){
        errors.email="username is email"
      }
      if(!values.password){
      errors.password="username is password"
      }
      return errors
    },
    onSubmit:async(values)=>{
      try {
          const data=await axios.post("https://project2-api.bosselt.com/api/user/register",values)
    console.log(data.data.data)
       if (data.data.data.token) {
      localStorage.setItem("token",data.data.data.token);
toast.success(data.data.message)
setTimeout(() => {
  navigate("/Login")
}, 2000);
  } else {
      toast.error("Registration Failed");
    }
      } catch (error) {
        toast.error("Registration Failed")
      }
    }
  })
  const navigate=useNavigate()

  

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
<form onSubmit={formik.handleSubmit}>
          <div className="labl">
            <label className="d-block">Username</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            {formik.errors.username&&(
              <small className="text-danger"> {formik.errors.username}</small>
            )}
          </div>
          <div className="mt-4 labl">
            <label className="d-block">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {
              formik.errors.email&&(
                <small className="text-danger">{formik.errors.email}</small>
              )
            }
          </div>
          <div className="mt-4 labl">
            <label className="d-block">Password</label>
            <input
              type="password"
              name="password"
              className="form-control p-relative"
              placeholder="..........."
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password&&(
            <small className="text-danger">{ formik.errors.password}</small>
            )}
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

          <button className="rounded btn mt-4" type="submit" >
            sign Up
          </button>
          </form> 
          <div className="d-flex justify-content-center">
            <div className="mt-4 sign_in">
              Already have an account?{" "}
              <Link to="/login">
                <span>Sign in</span>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Register;
