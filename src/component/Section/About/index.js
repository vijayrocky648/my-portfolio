import React, { useState, useEffect } from 'react';
import BARCHART from  '../../Bar/index'
import './index.css'
function ABOUT(props) {

    
    const skills = [{
        skillName:"Css",
        percentage:70
    },
    {
        skillName:"HTML",
        percentage:80
    },
    {
        skillName:"React",
        percentage:80
    },{
        skillName:"JavaScript",
        percentage:40
    },
    {
        skillName:"Node.js",
        percentage:60
    },{
        skillName:"Rest Api",
        percentage:80
    },{
        skillName:"Android",
        percentage:90
    }

]
    return (  <div className="container-fluid aboutsection d-flex align-items-center" style={{minHeight:"600px",height:"auto"}}>
        <div className="row  h-100 align-items-center">
           <div className="col-md-4 offset-md-1">
                <img className="myProfile"></img>
                <p className='aboutme'>I'm a Front-End Developer from Chennai in India,
I have serious passion for UI effects, animations and creating intuitive,
dynamic user experiences.
Let's make something special.</p>
           </div>
           <div className="offset-md-1 col-md-5 p-4" style={{display:"flex",alignItems:"center"}}>
               <div style={{width:"100%"}}>

              
               {/* <BARCHART label="React" percentage={60} /> */}
               {skills.map((x,index)=><BARCHART label={x.skillName} percentage={x.percentage} index = {index} animateBar = {props.animateBar} />)}
               </div>
           </div>
        </div>
    </div>);
}

export default ABOUT;