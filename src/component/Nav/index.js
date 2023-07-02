import './index.css'

function NAVBAR() {
    return ( <nav class="navbar navbar-expand-lg customsettingnav nav" >
    <div class="container">  
     <a class="navbar-brand" href="#"></a>   
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/></svg>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>      
          <li class="nav-item">
            <a class="nav-link" href="#experience">Journey</a>
          </li>    
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li> 
        </ul>        
      </div>
    </div>
  </nav>);
}

export default NAVBAR;