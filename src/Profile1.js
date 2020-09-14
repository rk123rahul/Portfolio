import React from "react";
import pic2 from "./rahul pic.jpeg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Profile1 = () =>{
  
    return(
        <>
        <div className="container">
         <div className=" profile container  ">
           <div className="profile1">
             <div classNmae="pic2">
          <img src={pic2} alt="my pic" width="150px"/>
            </div>
            <div className=" pic2_name">
            <div  className="display-1 text-light">   
                   <p>Rahul Kumar</p>
                   <hr></hr>
            </div>
            </div>
          </div>
         </div>
         <div className="container bg-dark text-light">
              <div className="rawicon">
                 <span className="favicon"><MailOutlineIcon/> rahulkumarrvc@gmail.com </span> 
                 <span className="favicon"><CallIcon/>8825383117 </span> 
                  <span className="favicon"><LinkedInIcon/>www.LinkedIn.com/in/rahul-kumar-919832167</span> 
                < span className="favicon">< GitHubIcon/>0000000000 </span> 
              </div>
         </div>
         <br></br><br></br>
         <div className="container">
            <div>
                 <h1>Technical Skills-</h1>
                 <hr></hr>
                 <div className="b2">
                 <p className=" b1 badge badge-primary bg-info">HTML/CSS, JAVASCRIPT,BOOTSTRAP,reactjs</p>
                 
                 <p className=" b1 badge badge-primary bg-info">PROGRAMMING IN C</p>
                 <p className=" b1 badge badge-primary bg-info">Python</p>
                 <p className=" b1 badge badge-primary bg-info">DATA STRUCTURES</p>
                 </div>
            </div>
         </div>
         <div className="container">
            <div>
                 <h1>Language-</h1>
                 <hr></hr>
                 <div className="b3">
                 <p className=" b4 badge badge-primary bg-info">English</p>
                 <p className=" b4 badge badge-primary bg-info">hindi</p>
                 
                 </div>
            </div>
         </div>
         </div>
    </>
    );
};


export  default Profile1;