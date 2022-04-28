import React, { useState, useEffect } from 'react';
import HEADER from './component/Header'
import './App.css';
import NAVBAR from './component/Nav/index'
import ABOUT from './component/Section/About'
import EXPERIENCE from './component/Section/Experience';
import PROJECT from './component/Project';
import CONTACT from './component/Contact';
import FOOTER from './component/Fotter';
import AOS from 'aos';


function App() {
  const [animateBar, setAnimateBar] = useState(false)


  useEffect(() => {

    AOS.init();

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
      <div className="navbarsection customsettingnav" style={{position:"sticky",top:"0px"}}>
        <div className='container ' >
          <NAVBAR />
        </div>
        <div style={{ widht: "100%", height: "2px", backgroundColor: "#4FD3C4" }}>

        </div>
      </div>
      <div className='aboutsection' id='about'>
        <ABOUT animateBar={animateBar} />
      </div>
      <div className='aboutsection' id='experience'>
        <EXPERIENCE />
      </div>
      <div className='container' id='project'>
        <PROJECT />
      </div>
      <section className='aboutsection' id='contact' style={{ backgroundColor: "#252934" }}>
        <div className='container'>
          <CONTACT />
        </div>

      </section>
      <section className='aboutsection' style={{ backgroundColor: "#1b242f" }}>
        <div className='container'>
          <FOOTER />
        </div>

      </section>
    </div>

  );
}

export default App;
