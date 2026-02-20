
import "../css/Addblog.css";
import { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { toast, } from "react-toastify";
import Header from "./comman/header";
import Footer from "./comman/Footer";
import { useFormik } from "formik";
const Addblog = () => {
    const navigate = useNavigate();
    const [image, setimage] = useState(null)
    const [imagepreview, setimagepreview] = useState(null)
  const removeimage=()=>{
    setimage(null)
    setimagepreview(null)
  }
  const formik=useFormik({
initialValues:{
  title:"",
  description:"",
  file: null,
},
validate:(values)=>{
  const errors={}
if(!values.title){
errors.title="Title is required"
}
if(!values.description){
errors.description="description is required"
}
if(!values.file){
errors.file="file is required"
}
return errors
},
onSubmit:async(values)=>{
 const sendData = new FormData();
    sendData.append("title", values.title);
    sendData.append("description", values.description);
    sendData.append("image", values.file);
    try {
      const token = localStorage.getItem("token");
      const data = await axios.post(
        "https://project2-api.bosselt.com/api/user/add-Blog",
        sendData,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      toast.success("Blog Added Succesfully");
      navigate("/");
      console.log(data);
    } catch (error) {
      console.log("REAL ERROR:", error.response?.data);
    }
}
  })


  return (
    <>
    <Header/>
    <form onSubmit={formik.handleSubmit}>
      <div className="textspace container mt-5 ">
        <h1>Add Blog</h1>

        <label>Title</label>

        <div>
          <input
            type="text"
            name="title"
            placeholder="write here"
            className="p-3"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.title && (
          <small className="text-danger">{formik.errors.title}</small>
        )}
      </div>

      <div className="areatext container mt-4">
        <div className="label-size">
          <label>Description</label>
        </div>
        <div>
          <textarea
            name="description"
            id=""
            placeholder="write here"
            className="p-3"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </div>
      {formik.errors.description&&(
        <small className="text-danger">{ formik.errors.description}</small>
      )}
      </div>

      <div className=" container mt-4">
        <div className="filelabel">
          <label>Upload image</label>
        </div>
       
    {imagepreview ? (
      <div style={{ position: "relative" }}>
        <img
          src={imagepreview}
          alt="imagepreview"
          style={{ width: "400px", height: "350px", objectFit: "cover", borderRadius: "8px" }}
        />

        <button
          type="button"
          onClick={removeimage}
          className="btnstyle"
        >
          ×
        </button>
      </div>
    ) : (
      
<input
       className="rounded spacee"
      type="file"
      name="file"
      accept="image/*"
      onChange={(event) => {
        const file = event.currentTarget.files[0];
        if (file) {
          formik.setFieldValue("file", file);
          setimage(file);
          setimagepreview(URL.createObjectURL(file));
        }
      }}
    />
    
    )}

        {formik.errors.file&&(
          <small className="text-danger">{ formik.errors.file}</small>
        )}
        <button className="p-3 rounded mt-4" type="submit">
          save
        </button>
      </div>
        </form>
      <Footer/>
    </>
  );
};

export default Addblog;
