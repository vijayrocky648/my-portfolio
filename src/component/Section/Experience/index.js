import React, { useEffect,useState } from "react";
import TIMELINE from "../../Timeline/timeline";
import {collection, getDocs} from 'firebase/firestore'
import db from '../../../firebase/firebaseconfig';
import { document } from "cdb/lib/schema";



const getProfileInfo = [
        {
            Year:"2017-2019",
            Heading:"First encounter",
            Content:"It all started in grade 10 at St.James HSS, when a friend of mine introduced me to the world of tech with his brand new smartphone. It always amazed me to find how these things work"
        },
        {
            Year:"2019-2020",
            Heading:"High School",
            Content:"At this point, i started to make use of the internet in all possible ways, surfing became a passtime and getting to know something was cool. It was the time when you didn't have these much of mobile variants , so i got to know every available phone specs like back of my hand and it felt good. Almost all the games i played at that time was pirated and as you know its not that easy to install a game on your PC. Google became a friend and by fixing things for my needs learnt a lot."
        },
        {
            Year:"2020-2022",
            Heading:"Quadrennial period",
            Content:"I Pursued Mechanical Engineering at KRCE in Trichy. Yea, My dad ws a mechie ,he was my rolemodel so it was a obvious choice ;). Over a period of time developed interest in hacking. So after a year , i had a rough idea on Mobiles , hacking in theory and few other tech stuffs. Got better on tech hacks, Mobile and PC mods. This is when i realized mech was not my piece of cake."
        },
        {
            Year:"2022-2024",
            Heading:"Trainee Software Engineer",
            Content:"Started my career as the first employee of the organization. Initially there were few hickups as i was not so good at code and over a period of time it changed and things were falling into place. I underwent training for 3 months in Full Stack Development with AngularJS,NodeJS,Express,MongoDB . Parallely got to know other dev trends in the market"
        },
        {
            Year:"2024-2026",
            Heading:"Software Engineer",
            Content:`Got an Upgrade as a full time Software Engineer. Involved in Architectural revamps along-side with the CTO of the firm. Contributed in the development of new features and functionalities for the tool.

            Parallely learnt CI/CD with jenkins and Docker and invloved in Server maintenance in Digital ocean. Worked few trial sites with JAM Stack. Started learning python for machine learning for a side hustle.
            
            In January 2020, started a instagram blog called caffeine_tech to share my ideas and contribute to the dev community and to learn from them.Hoping to share , teach and Learn as much as possible and it goes on...`
        }

    ];




function EXPERIENCE() {
    const firebaseData = collection(db,"Timeline")
    const [experience,setExperience] = useState([])
    useEffect( ()=>{
        const document =  getDocs(firebaseData).then((document)=>{
            const data =  document.docs.length>0&&document.docs.map(x=>x.data())
            console.log(document.docs)
            data.sort((a,b)=>a.order-b.order)
            setExperience(data)
        })
      },[])
   
    return ( <div className="container">
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