import React from "react";
import {NavLink} from "react-router-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



const Menu = () => {
     return (
         <>
  <div className=" container xyz ">    
    <div className="raw">
      <div className="col-12 mx-auto">
      
<nav className="navbar navbar-expand-lg navbar-light ">
       <NavLink className="navbar-brand text-light logo" to="#"><span className="text-light">Port</span>folio</NavLink>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon "></span>
        </button>

  <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
    <ul className="navbar-nav t">
      <li className="nav-item element ">
        <NavLink exact activeClassName="nav" className="nav-link text-light"to="./">Home<span class="sr-only">(current)</span> </NavLink>
      </li>
      <li className="nav-item element">
        <NavLink exact activeClassName="nav" className="nav-link text-light"to="./Profile">Profile<span class="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item element active">
        <NavLink exact activeClassName="nav" className="nav-link text-light"to="./Marks">Education <span class="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item element active">
        <NavLink exact activeClassName="nav" className="nav-link text-light"to="./Hobbies">Hobbies<span class="sr-only">(current)</span></NavLink>
      </li>
    
    </ul>
   
  </div>
</nav>
</div>
</div>
</div>

   
         </>

     );
     
};

export default Menu;