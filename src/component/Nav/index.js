import { useEffect, useState } from "react";
import "./index.css";

function NAVBAR() {
  
  const [selectedNav,setSelectedNav] = useState({about:true,journey:false,contact:false})

  useEffect(() => {

      console.log('loaded successfully')
      const navbar_reveal = document.getElementById("navbar");
      ///we already now first section is the header now we need to target the section section
      ///because in the first section we dont show the navbar
      // Function to be executed when the target section is out of context
      function handleIntersection(entries, observer) {
       // console.log(entries);
        entries.forEach((entry)=>{
          debugger
          document.readyState === 'complete'&& entry.target.id == 'header' && navbar_reveal.classList.toggle('hide',entry.isIntersecting)
          
          if(entry.target.id === 'about' && entry.isIntersecting){
            setSelectedNav({about:true,journey:false,contact:false})
          }
          if(entry.target.id === 'experience' && entry.isIntersecting){
            setSelectedNav({about:false,journey:true,contact:false})
          }
          if(entry.target.id === 'contact' && entry.isIntersecting){
            setSelectedNav({about:false,journey:false,contact:true})
          }
        });
      }
  
      // Create an Intersection Observer
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.3,
      });
  
      // Target the section you want to track
      const targetSection = document.getElementsByClassName("App");
  
      // Start observing the target section
      targetSection[0].childNodes.forEach(x=>observer.observe(x));
      
      
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg customsettingnav nav hide"
      style={{ position: "fixed", top: 0,zIndex:1,width:"100%" }}
      id="navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            fill="white"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
              fill="#1040e2"
            />
            <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li> */}
            <li>
              <a className={`nav-link ${selectedNav.about && 'active'}`} href="#about" onClick={()=>setSelectedNav({about:true,journey:false,contact:false})}>
                About
              </a>
            </li>
            <li className="nav-item active">
              <a className={`nav-link ${selectedNav.journey && 'active'}`} href="#experience" onClick={()=>setSelectedNav({journey:true,about:false,contact:false})}>
                Journey
              </a>
            </li>
            {/* <li className="nav-item">
              <a className={`nav-link ${selectedNav.project && 'active'}`} href="#contact" onClick={()=>setSelectedNav({contact:false,project:true,journey:false,about:false})}>
                Project
              </a>
            </li> */}
            <li className="nav-item">
              <a className={`nav-link ${selectedNav.contact && 'active'}`} href="#contact" onClick={()=>setSelectedNav({contact:true,journey:false,about:false})}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NAVBAR;
