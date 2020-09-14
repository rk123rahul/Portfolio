import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Footer from "./Footer";
import "./index.css";
import pic from "./Twitter.png";
import pic2 from "./Instagram.png";
import pic3 from "./Facebook.png";
const Home1 = () => {
  return (
    <>
      <div class="top">
        <div className="container vl1">
          <div class="vl"></div>
          <div><p className="text-light name ">DHRITI</p><p className="display-3 course"> Electronics and Communication (B-tech)<br></br>Web developer</p><button type="button" class="btn btn-light button1 text-secoundry">Contact</button></div>
          <div class="dropdown">
            <button class="dropbtn rounded-circle button5">< ArrowDownwardIcon/></button>
            <div class="dropdown-content">
              <img src={pic} className="drop" ></img>
              <img src={pic2} className="drop" ></img>
              <img src={pic3} className="drop" ></img>
            </div>
          </div>

        </div>
      </div>
      <Footer />

    </>
  );
};


export default Home1;