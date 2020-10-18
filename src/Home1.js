import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Footer from "./Footer";
import "./index.css";
import "./home.css";


const Home1 = () => {
  return (
    <>
    
      <div className="container-fluid p-0">
          
            <section className="resume-section" id="about col-lg-12 col-sm-12">
                <div className="resume-section-content">
                    <div className="">
                    <h1 className="mb-0 rahul">
                        RAHUL
                        <span className="text-primary kumar">KUMAR</span>
                    </h1>
                    </div>
                    <br></br>
                    <div className="subheading mb-5">
                      <span className="fullstack "> FULL STACK WEB-DEVLOPER</span><br></br>
                        JAMSHEDPUR, PIN 831002 · (+91) 8825383117 ·
                        <a href="" className="rvc">rahulkumarrvc@gmail.com</a>
                    </div>
                    <p className="lead mb-5">To work for an organization which provides me the opportunity to improve my skills and knowledge to growth along with the organization objective.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/rahul-kumar-919832167/"><i className="fab fa-linkedin-in"> </i></a>
                        <a className="social-icon" href="https://github.com/rk123rahul"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="social-icon" href="https://www.facebook.com/anni.kumar.372/"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
      
           
            <hr className="m-0" />
    
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">BACHELOR OF TECHNOLOGY(B-TECH)</h3>
                            <div className="subheading mb-3">TECHNO INDIA UNIVERSITY,WEST BENGAL</div>
                            <div>Electronics and communication(Btech)</div>
                            <p className="intrest"> 7.7 CGPA(TILL 6TH SEM.)</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary intrest">2017 - Present</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">HIGHER SECONDARY SCHOOL CERTIFICATE(12TH)</h3>
                            <div className="subheading mb-3">D.A.V. PUBLIC SCHOOL,JAMSHEDPUR</div>
                            <p className="intrest">58%</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary intrest">2017</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">SECONDARY SCHOOL CERTIFICATE(10TH)</h3>
                            <div className="subheading mb-3">KERALA PUBLIC SCHOOL,JAMSHEDPUR</div>
                            <p className="intrest">7.4 CGPA</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary intrest">2015</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        
            <section className="resume-section " id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5 skills">Skills</h2>
                   
                 
                    
                    <ul className="fa-ul mb-0 intrest">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                           HTML,CSS,JAVASCRIPT
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            REACTJS
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            PYTHON,DJANGO
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                           GIT
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
          
            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <h2 className="mb-5">Interests</h2>
                    <div className="intrest">
                   <p>Painting <i class="fas fa-paint-brush"></i></p>
                   <p  >Gaming <i class="fas fa-headset"></i></p>
                  <p >Web UI-Degion <i class="fas fa-cogs"></i></p>
                  </div>
                </div>
            </section>
            <hr className="m-0" />
          
           
        </div>
     

    

      <Footer></Footer>
    </>
  );
};


export default Home1;