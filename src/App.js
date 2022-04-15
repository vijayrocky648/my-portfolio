import React, { useState, useEffect } from 'react';
import HEADER from './component/Header'
import './App.css';
import NAVBAR from './component/Nav/index'
import ABOUT from './component/Section/About'
import EXPERIENCE from './component/Section/Experience';
import PROJECT from './component/Project';
import CONTACT from './component/Contact';
import FOOTER from './component/Fotter';



function App() {
  const [animateBar,setAnimateBar] = useState(false)
  

  useEffect(()=>{
    document.addEventListener("scroll", reveal);
  })

  const reveal = (e) => {
    console.log(e);
    var reveals = document.getElementsByClassName("aboutsection")[0];
    var windowHeight = window.innerHeight;
    var elementTop = reveals.getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      setAnimateBar(true);
    } else {
      setAnimateBar(false);
    }
  }
  

 
  return (
    <div className="App">
       <HEADER />
      <div className="navbarsection customsettingnav">
        <div className='container ' >
           <NAVBAR />
        </div>       
        <div style={{widht:"100%",height:"2px",backgroundColor:"#4FD3C4"}}>
          
        </div>
      </div>
      <div className='aboutsection'>
         <ABOUT animateBar = {animateBar}/>
      </div>
      <div className='aboutsection'>
         <EXPERIENCE/>
      </div>
      <div className='aboutsection'>
         <PROJECT/>
      </div>
      <section className='aboutsection' style={{backgroundColor:"#252934"}}>
         <CONTACT/>
      </section>
      <section className='aboutsection' style={{backgroundColor:"#1b242f"}}>
         <FOOTER/>
      </section>
    </div>
  );
}

export default App;
