import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./Marks2.css";

import pic1 from "./Screenshot (11).png"
import pic2 from "./Screenshot (12).png"
import pic3 from "./Screenshot (13).png"
import GitHubIcon from '@material-ui/icons/GitHub';
import Footer from "./Footer";

const Marks2 = () => {
    return (
        <>
        <div className="subheading mb-5 container">
                      <span className="fullstack  "> PUBLIC DATA</span><br></br>
                      <p className="lead mb-5"><li>ClICK ON A GIT FOR A SOURCE CODE</li> </p>
                    </div>
        <div className="container mb-5 my-3 ">
        <div className="row ">
            <div className="card col-lg-3 col-sm-12 " >
                <img className="card-img-top" src={pic1} width="292" height="286px"alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">PORTFOLIO</h5>
                        <p className="card-text"> Reactjs as frontend and Django as backend . for Style Css3 and Bootstrap</p>
                        <div className="row ">
                        <b className="" >PUBLIC</b>
                        <a href="https://github.com/rk123rahul/Portfolio" style={{ marginLeft:"10px" }} className="btn btn-primary col-3 btn-dark btncolor"><GitHubIcon></GitHubIcon></a>
                        </div>
                    </div>
</div>
<div className="card col-lg-3 col-sm-12 " >
                <img className="card-img-top" src={pic2} width="292" height="286px"alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">UX_DEGION</h5>
                        <p className="card-text">reactjs as Frontend Style using Css3 and Bootstrap. Responsive</p>
                        <div className="row ">
                        <b className="">PUBLIC</b>
                        <a href="https://github.com/rk123rahul/rsquarewt2-RahulKumar-" style={{ marginLeft:"10px" }} className="btn btn-primary col-3 btn-dark btncolor"><GitHubIcon></GitHubIcon></a>
                        </div>
                    </div>
</div>         <div className="card col-lg-3 col-sm-12 " >
                <img className="card-img-top" src={pic3} width="292" height="286px"alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">COVID-19 TRACKER</h5>
                        <p className="card-text">reactjs as Frontend fetching Data from API Style Css and Bootstrap . Responsive</p>
                        <div className="row ">
                        <b className="">PUBLIC</b>
                        <a href="https://github.com/rk123rahul/covid-tracker" style={{ marginLeft:"10px" }} className="btn btn-primary col-3 btn-dark btncolor"><GitHubIcon></GitHubIcon></a>
                        </div>
                    </div>
</div>
</div>
</div>
        <Footer></Footer>
        </>

    );
};


export default Marks2;