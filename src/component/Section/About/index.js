import React, { useState, useEffect } from 'react';
import BARCHART from '../../Bar/index'
import './index.css'
import PROFILEPIC from '../../../img/Profile.jpg'
import {collection, getDocs} from 'firebase/firestore'
import db from '../../../firebase/firebaseconfig';


function ABOUT(props) {
 
    const firebaseData = collection(db,"About")
    const [skill,setSkill] = useState([])
    
    useEffect(()=>{
      getDocs(firebaseData).then((document)=>{
        const data =  document.docs.length>0&&document.docs[0].data()
        setSkill(data.Skill||[])
      })
    },[])

    const skills = [{
        skillName: "Css",
        percentage: 70
    },
    {
        skillName: "HTML",
        percentage: 80
    },
    {
        skillName: "React",
        percentage: 80
    }, {
        skillName: "JavaScript",
        percentage: 40
    },
    {
        skillName: "Node.js",
        percentage: 60
    }, {
        skillName: "Rest Api",
        percentage: 80
    }, {
        skillName: "Android",
        percentage: 90
    }

    ]
    return (<div className="" >
        <div className="row align-items-center" style={{margin:"60px 0px"}}>
            <div className='col-md-12'>
                <h1 className='footer-text' style={{ color: "rgb(230, 9, 101)" }} data-aos="fade-right" >ABOUT</h1>
                <div className='underLine' data-aos="fade-right" style={{ background: "rgb(230, 9, 101)" }}>
                </div>
            </div>
        </div>
        <div  className="row  align-items-center">
            <div className="col-md-5 offset-md-1" data-aos="fade-right" data-aos-delay="500" >
                <img className="myProfile" src={PROFILEPIC}></img>
                <p className='aboutme'>I'm a <b>FullStack Developer</b> from Chennai in India,
                    I have serious passion for UI effects, animations and creating intuitive,
                    dynamic user experiences.
                    Let's make something special.</p>
            </div>
            <div className="offset-md-1 col-md-5 p-4" style={{ display: "flex", alignItems: "center" }} data-aos="fade-left" data-aos-delay="500">
                <div style={{ width: "100%" }}>
                    {skill.map((x, index) => <BARCHART label={x.skillName} percentage={x.percentage} index={index} animateBar={props.animateBar} />)}
                </div>
            </div>
        </div>
    </div>);
}

export default ABOUT;