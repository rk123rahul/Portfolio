import React from "react";
import {NavLink} from "react-router-dom";

import "./menu.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from "./rahul pic.jpeg";
import HomeIcon from '@material-ui/icons/Home';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
const Menu = () => {
     return (
         <>
  
<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">PORTFOLIO</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={img1} width="151px" alt="" /></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <li className="nav-item element ">
        <NavLink exact activeClassName="nav" className="nav-link text-light"to="./"><span className="home">Home</span> <span className="sr-only">(current)</span> </NavLink>
      </li>
      
     
      <li className="nav-item element active">
        <NavLink exact activeClassName="nav" className="nav-link text-light"to="./Marks2"> <span className="home">Projects</span> <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item element active">
        <NavLink exact activeClassName="nav" className="nav-link text-light"to="./Hobbies"> <span className="home">Contact ME</span> <span className="sr-only">(current)</span></NavLink>
      </li>
                </ul>
            </div>
        </nav>

   
         </>

     );
     
};

export default Menu;