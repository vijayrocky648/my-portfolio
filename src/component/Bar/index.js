import React, { useState, useEffect } from 'react';
import './index.css'
function BARCHART(props) {
    useEffect(()=>{
       if(props.animateBar){
         let barpercentage = document.getElementsByClassName('barpercentage')     
         barpercentage[props.index].children[0].style.height= `${100}%`
         barpercentage[props.index].children[0].style.width= `${props.percentage}%`
       }
     
    },[props.animateBar])
    return (<div className="barchart">
         <div className="custombarrow">
            <div className="barlabel">
                 {props.label}
            </div>
            <div className="barpercentage d-flex">
                <div></div>
            </div>
            <span>{`${props.percentage}%`}</span>
         </div>
    </div>);
}

export default BARCHART;