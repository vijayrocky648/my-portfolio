import { useState } from "react";
import "./index.css";
import db from "../../firebase/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function CONTACT() {
  const firebaseData = collection(db, "ContactInformation");

  const setToastAnimation = (message) => {
    toast(message, {
      position: "top-left",
      autoClose: 0,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type: "success",
      bodyClassName: "customToastClass",
      className: "customToastClass",
    });
  };
  const [getContact, setContact] = useState({
    contactInformation: {
      Name: "",
      Email: "",
      Message: "",
    },
  });
  const message = {
    success: `❤️ Hey ${getContact.contactInformation.Name} !!!,I appreciate your interest and will be in touch with you shortly.!`,
    error: "Something went wrong your information is not submitted ❌",
  };
  const captureOnChange = (e, type) => {
    getContact.contactInformation[type] = e.target.value;
    setContact({ contactInformation: { ...getContact.contactInformation } });
  };
  const ONSUMIT = (e) => {
    addDoc(firebaseData, getContact.contactInformation)
      .then(() => setToastAnimation(message.success))
      .catch((ex) => setToastAnimation(message.error))
      .finally(() =>
        setContact({ contactInformation: { Name: "", Email: "", Message: "" } })
      );
    e.preventDefault();
  };
  return (
    <section
      className="aboutsection"
      id="contact"
      style={{ backgroundColor: "#252934" }}
    >
      <div className="container">
        <div
          className="row justify-content-center contactComponent"
          style={{ marginTop: "100px" }}
        >
          {/* <div className="col-md-6">
           <img src={ReactLogo} style={{maxHeight:"300px",maxWidth:"300px"}}/>
        </div> */}
          <div className="col-md-12" data-aos="fade-right">
            <h1 className="footer-text">CONTACT</h1>
            <div className="underLine"></div>
            <div className="bannerContactInfo">
              Have a question or want to work together?
            </div>
          </div>
          <div className="col-md-4 d-flex " data-aos="fade-right">
            <form className="w-100 formData" onSubmit={ONSUMIT}>
              <input
                value={getContact.contactInformation.Name}
                type="text"
                placeholder="Name"
                onChange={(e) => captureOnChange(e, "Name")}
                required
              />
              <input
                value={getContact.contactInformation.Email}
                type="text"
                placeholder="Email"
                onChange={(e) => captureOnChange(e, "Email")}
                required
              />
              <textarea
                value={getContact.contactInformation.Message}
                type="text"
                placeholder="Message"
                onChange={(e) => captureOnChange(e, "Message")}
                required
              />
              <button>Submit</button>
            </form>
          </div>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
}

export default CONTACT;
