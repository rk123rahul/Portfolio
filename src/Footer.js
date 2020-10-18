import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./Footer.css";


const Footer = () => {
    return(
        <>
            <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">To work for an organization which provides me the opportunity to improve my skills and knowledge to growth along with the organization objective</p>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>SKILLS</h6>
          <ul className="footer-links">
            <li><a href="http://scanfcode.com/category/c-language/">HTML,CSS</a></li>
            <li><a href="http://scanfcode.com/category/front-end-development/">JAVASCRIPT,REACJS</a></li>
            <li><a href="http://scanfcode.com/category/back-end-development/">DJANGO</a></li>
            <li><a href="http://scanfcode.com/category/java-programming-language/">PYTHON</a></li>
            <li><a href="http://scanfcode.com/category/android/">GIT</a></li>
            
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li><a href="http://scanfcode.com/about/">HOME</a></li>
            <li><a href="http://scanfcode.com/contact/">PROFILE</a></li>
            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">CONTACT US</a></li>
           
          </ul>
        </div>
      </div>
      <hr></hr>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
            <a href="#">Rahul Kumar</a>.
          </p>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
         
        </div>
      </div>
    </div>
  </footer>
        </>

    );
};


export default Footer;