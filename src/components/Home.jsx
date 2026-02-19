import { useEffect } from "react";
import "../css/Home.css";
import karthy from "../assets/Ellipse 14.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import Footer from "./comman/Footer";
import Header from "./comman/header";
const Home = () => {

  const [blog, setblog] = useState([]);


  useEffect(() => {
    getblogs();
  }, []);

  const getblogs = async () => {
    // debugger
    try {
      const token = localStorage.getItem("token");
      const data = await axios.get(
        "https://project2-api.bosselt.com/api/user/user-blogs",
        {
          headers: {
            Authorization: token,
          },
        },
      );
      setblog(data.data.data.blogs);
      console.log(data.data.data.blogs);
    } catch (error) {
      toast(data.data.error);
    }
  };

  return (
    <>
    <Header/>
      <div className="d-flex justify-content-between space text-align-center container ">
        <h3 className="r">My Blogs</h3>
        <Link to="/add">
          <button className="btn btn-primary custombtn">Add Blog</button>
        </Link>
      </div>
      <div className="container">
        <div className="row g-4 pt-5">
          {blog &&
            blog.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card-box shadow p-3">
                  <div className="top-profile d-flex align-items-center">
                    <img src={karthy} alt="" className="mb-3" />
                    <div className="ms-3">
                      <h2>{item.title}</h2>
                      <p className="newly">
                        Posted At:{" "}
                        {new Date(item.createdAt).toLocaleDateString()}
                      </p>
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
                    <h3 className="mt-3">{item.description}</h3>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
<Footer/>
    </>
  );
};

export default Home;
