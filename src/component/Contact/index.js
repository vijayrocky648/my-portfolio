import ReactLogo from './../../img/contact_1.svg';
import './index.css'
function CONTACT() {
    return ( <div className="row justify-content-center contactComponent" style={{marginTop:"100px"}} >
        {/* <div className="col-md-6">
           <img src={ReactLogo} style={{maxHeight:"300px",maxWidth:"300px"}}/>
        </div> */}
        <div className='col-md-12'>
            <h1 className='footer-text'>CONTACT</h1>
            <div className='underLine'>               
            </div>
            <div className='bannerContactInfo'>
                Have a question or want to work together?
            </div>
        </div>
        <div className='col-md-4 d-flex '>
            <form className= 'w-100 formData'>
                 <input type="text" placeholder='Name' required/>
                 <input type="text" placeholder='Email' required/>
                 <textarea type="text" placeholder='Message' required/>
                 <button>Submit</button>
            </form>
        </div>
    </div> );
}

export default CONTACT;