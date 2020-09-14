import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Clock = () =>{
    let time = new Date().toLocaleTimeString();
    
    const [ctime,setCtime] = useState(time);
    const UpdateTime = () => {
        time =new Date().toLocaleTimeString();
        setCtime(time);

    };
    setInterval(UpdateTime,1000);
    return(
        <>
           <div>
                <span>{ctime}</span>
           </div>
        </>
    );
};


export  default Clock;