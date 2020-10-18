import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./hobbies.css";
import Footer from "./Footer";

const Hobbies1 = () => {
  return (
    <>
    
      <form class="form22">
     
        <h2 className="h22">CONTACT <span className="us"> ME</span></h2>
        <p className="22" type="Name:"><input placeholder="Write your name here.."></input></p>
        <p className="22" type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
        <p className="22" type="Message:"><input placeholder="What would you like to tell us.."></input></p>
        <button className="button22 rounded">Send Message</button>
        <div className="div22">
          <span  className="fa fa-phone span22"></span>+91 8825383117
    <span  className="fa fa-envelope-o span22"></span> rahulkumarrvc@gmail.com
  </div>
  
      </form>
      <Footer/>
    </>
  );
};


export default Hobbies1;