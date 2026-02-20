
import Header from "./comman/header";
import Footer from "./comman/Footer";
const Updateblog = () => {
 
  return (
    <>
    <Header/>
      <div className=" container profile">
        <h1>Edit blog</h1>
      </div>
      <div className="textspace container ">
        <div className="textspace container mt-5 ">
          <label>Title</label>

          <div>
            <input
              type="text"
              name="name"
              placeholder="write here"
              className="p-3"
            />
          </div>
        </div>

        <div className="textspace container mt-4">
          <div className="label-size">
            <label>Description</label>
          </div>
          <div>
            <input
              type="email"
              name="email"
              id=""
              placeholder="write here"
              className="p-3"
            />
          </div>
        </div>

        <div className="imagespace container mt-4">
          <div className="filelabel">
            <label>Upload image</label>
          </div>
          <div>
            <input
              type="file"
              className="p-3"
              onChange={(e) => setimage(e.target.value)}
            />
          </div>
          <button className="p-3 rounded mt-4">update</button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Updateblog;
