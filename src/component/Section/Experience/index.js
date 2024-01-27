import React, { useEffect,useState } from "react";
import TIMELINE from "../../Timeline/timeline";
import {collection, getDocs} from 'firebase/firestore'
import db from '../../../firebase/firebaseconfig';


function EXPERIENCE() {
    const firebaseData = collection(db,"Timeline")
    const [experience,setExperience] = useState([])
    useEffect( ()=>{
        const document =  getDocs(firebaseData).then((document)=>{
            const data =  document.docs.length>0&&document.docs.map(x=>x.data())
            setExperience(data.sort(sortArray))
        })
      },[])
    const sortArray = (a,b)=>{
        return Number(a.order)-Number(b.order);
    }
    return ( 
    <div className="container" id="experience">
        <h3 style={{padding:"5%",color:"#E60965",fontFamily:"ZCOOL QingKe HuangYou', cursive"}}>
        <span>&#9889;</span>MY JOURNEY
        <span>&#9889;</span></h3>
        {experience.map((x,index)=>{
           return  <TIMELINE id={index+1} content ={x}/>
        })}
           <p>&#9940;</p>
         <h3 style={{padding:"1%",color:"#E60965",fontFamily:"ZCOOL QingKe HuangYou', cursive"}}>THE END</h3>
      
        </div>);
}

export default EXPERIENCE;