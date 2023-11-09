import './timeline.css'
import 'aos/dist/aos.css'; 
import react,{ useEffect } from 'react';
import PORTFOLIO_STORAGE from '../../firebase/portfolio_storage';
import storage from '../../firebase/firebase_storage';
import { useRef } from 'react';
import { useState } from 'react';





function SHOWYEAR(props){
    return <p  data-aos="fade-up" data-aos-delay="80" className={`${props.cssClass} yearInfo`}>{props.Year}</p>
}
function  DETAILEXPERIENCE(props){
    return (
    <div style={{marginBottom:"2%"} }  data-aos="fade-up" data-aos-delay="80" className='contentInfo'> 
        {props.ImageCallBack.length>0 &&  <img src={props.ImageCallBack} className={props.CheckAlignment && "checkAlignement"}></img>}
        <h4 className='min_year'>{props.Year}</h4>
        <h4 className={`${props.cssClass}`}>{props.Heading}</h4>
        <p className={`${props.cssClass}`} >{props.Content}</p>
    </div>
    )
}

function TIMELINE(props) {
   
    const [getImageURL,setImageURL] = useState([]);
    useEffect(()=>{
       props.content.Image && PORTFOLIO_STORAGE(storage,props.content.Image).then((url)=>{
          setImageURL(prev=>{return [url,...prev]})
       })
    },[])
    return (
        <div className="timeline_parent">
            <div className='timeline_content' ordering= {props.id%2==0?"three":"two"}>
                 {props.id%2==0?
                 <DETAILEXPERIENCE cssClass = "text-end"  Heading = {props.content.Heading} Content = {props.content.Content} Year={props.content.Year} Image = {props.content.Image} ImageCallBack = {getImageURL} CheckAlignment = {true}/>
                 :<SHOWYEAR  cssClass = "text-end" Year={props.content.Year} />}
            </div>
            <div className="timeline_design"> 
                <div className='h-100 custom_timeline' >
                    <div className='timeline_circle'></div>
                    <div className='timeline_line'>
                        
                    </div>
                </div>
            </div>
            <div className='timeline_content'  ordering= {props.id%2!=0?"three":"two"}>
               {props.id%2!=0?
               <DETAILEXPERIENCE cssClass = "text-start"  Heading = {props.content.Heading} Content = {props.content.Content} Year={props.content.Year} Id = {props.id} ImageCallBack = {getImageURL} CheckAlignment = {false}/>
               :<SHOWYEAR    cssClass = "text-start" Year={props.content.Year}  />}
            </div>
        </div>
        );
}

export default TIMELINE;