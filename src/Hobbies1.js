import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import hpic from "./pexels-pixabay-275033.jpg";
import hpic2 from "./pexels-daian-gan-102127.jpg";
import hpic3 from "./pexels-rachel-xiao-773063.jpg";

const Hobbies1 = () =>{
    return(
          <>    
            <div className="container hobbies_background">
                <div>
                      <h1 className='text-light text-center display-1'>
                        <span className="text-danger">HOB</span> BIES
                      </h1>
                      <hr className="text-light"></hr>
                </div>
                   <div className="raw22">
                     <div className="hobbies_img1 col-lg-4 col-sm-12">
                     <div class="card" >
                       <img src={hpic} class="card-img-top" alt="rahul" />
                       <div class="card-body">
                       <h5 class="card-title">Gaming</h5>
                      
                       
                     </div>
                     </div>
                     </div> 
                
                
                     <div className="hobbies_img1 col-lg-4 col-sm-12">
                     <div class="card" >
                       <img src={hpic2} class="card-img-top" alt="rahul" height="180px"/>
                       <div class="card-body">
                       <h5 class="card-title">Painting</h5>
                      
                       
                     </div>
                     </div>
                     </div> 
                
                
                     <div className="hobbies_img1 col-lg-4 col-sm-12">
                     <div class="card" >
                       <img src={hpic3} class="card-img-top" alt="rahul"  height="180px"/>
                       <div class="card-body">
                       <h5 class="card-title">Sports</h5>
                      
                       
                     </div>
                     </div>
                     </div> 
                     </div>
                     <div className="SECONDARY">
                      <h1 className="text-center text-light"><span className="text-danger">CERTI</span>FICATES</h1>
                      <hr className="text-light"></hr>
                      <div className="kps">
                          <h2 className="text-danger">
                          PR0GRAMMING IN C (USING UDEMY ONLINE COURSE)
                          </h2>
                          <div>
                              <div className="col-lg-6 col-sm-6 text-light">
     
                                <p className="hrami">
                                C PROGRAMMING FOR BEGINNERS
                
                                </p>
                              </div>

                          </div>
                      </div>
                      
                 </div>
                 <div className="SECONDARY">
                     
                      <hr className="text-light"></hr>
                      <div className="kps">
                          <h2 className="text-danger">
                          
                            PYTHON (USING UDEMY ONLINE COURSE)

                          </h2>
                          <div>
                              <div className="col-lg-6 col-sm-6 text-light">
     
                                <p className="hrami">
                                COMPLETE PYTHON 3 COURSE
                
                                </p>
                              </div>

                          </div>
                      </div>
                      
                 </div>
                 <div className="SECONDARY">
                      
                      <hr className="text-light"></hr>
                      <div className="kps">
                          <h2 className="text-danger">
                          FRONTEND WEB DEVELOPMENT (USING UDEMY ONLINE COURSE)
                          </h2>
                          <div>
                              <div className="col-lg-6 col-sm-6 text-light">
     
                                <p className="hrami">
                                COMPLETE HTMT/CSS, JAVASCRIPT,JQUERY,BOOTSTRAP
                
                                </p>
                              </div>

                          </div>
                      </div>
                      
                 </div>
                
                
            </div>
          </>
    );
};


export  default Hobbies1;