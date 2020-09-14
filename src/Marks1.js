import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';

const Marks1 = () =>{
    return(
        <>
           <div className="education container">
                 <div className="education_title display-1 text-center text-danger">
                <h1><span className="ImportContactsRoundedIcon text-light"><ImportContactsRoundedIcon/></span><span className="text-light">E</span>ducation <span className="ImportContactsRoundedIcon text-light"><ImportContactsRoundedIcon/></span>
                </h1>
                <hr></hr>
                 </div>
                 <div className="SECONDARY">
                      <h1 className="text-center text-light"><span className="text-danger">SECONDARY</span> SCHOOL CERTIFICATE(10TH)-</h1>
                      <div className="kps">
                          <h2 className="text-light">
                          KERALA PUBLIC SCHOOL,JAMSHEDPUR
                          </h2>
                          <div className="smk">
                              <div className="col-lg-6 col-sm-6 text-danger">
                                   2015
                              </div>
                              <div className="col-lg-6 col-sm-6 text-danger">
                                   8.4CGPA
                              </div>

                          </div>
                      </div>
                      <span className='text-danger '><hr></hr></span>
                 </div>
                 <div className="SECONDARY">
                      <h1 className="text-center text-danger"><span className="text-light">HIGHER</span> SECONDARY SCHOOL CERTIFICATE(12TH)-</h1>
                      <div className="kps">
                          <h2 className='text-danger'>
                         <span className="text-light"> D.A.V. PUBLIC</span>  SCHOOL,JAMSHEDPUR
                          </h2>
                          <div className="smk">
                              <div className="col-lg-6 col-sm-6 text-danger">
                                   2017
                              </div>
                              <div className="col-lg-6 col-sm-6 text-danger">
                                   56%
                              </div>

                          </div>
                      </div>
                      <span className='text-danger '><hr></hr></span>
                 </div>
                 <div className="SECONDARY">
                      <h1 className="text-center text-danger"><span className="text-light">BACHELOR</span> OF TECHNOLOGY(B-TECH)-</h1>
                      <div className="kps">
                          <h2 className="text-light">
                          TECHNO INDIA UNIVERSITY,WEST BENGAL
                          </h2>
                          <div className="smk">
                              <div className="col-lg-6 col-sm-6 text-danger">
                              2017 – Present
                              </div>
                              <div className="col-lg-6 col-sm-6 text-light">
                              7.45 CGPA(TILL 5TH SEM.)
                              </div>

                          </div>
                      </div>
                      <span className='text-danger '><hr></hr></span>
                 </div>
                
                
                
                
           </div>
        </>
         
    );
};


export  default Marks1;