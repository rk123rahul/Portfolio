import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Menu from "./Menu"
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

import Marks2 from "./Marks2";
import Hobbies from "./Hobbies";

const App = () => {
    return(
        <>
        <Menu/>
        <Switch>
               <Route exact path="/" component={Home}/>
               
               
               <Route  exact path="/Marks2" component={Marks2}/>
               <Route exact path="/Hobbies" component={Hobbies}/>
        </Switch>
        
        </>

    );
};


export default App;