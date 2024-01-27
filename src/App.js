import React, { useState, useEffect, Suspense, lazy } from "react";
import HEADER from "./component/Header";
import "./App.css";
import NAVBAR from "./component/Nav/index";
import ABOUT from "./component/Section/About";
import EXPERIENCE from "./component/Section/Experience";
import PROJECT from "./component/Project";
import CONTACT from "./component/Contact";
import FOOTER from "./component/Fotter";
import AOS from "aos";
import { Container, Link } from "react-floating-action-button";
import RESUME from "../src/img/VijayResume.pdf";
import Loading from "./component/Loading/Loading";
function App() {
  const [animateBar, setAnimateBar] = useState(false);

  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
    });
    var fabContainer = document.getElementsByClassName("fab-container")[0];
    if (fabContainer) {
      fabContainer.style.display = "none";
      document.addEventListener("scroll", reveal);
    }
  }, []);

  const reveal = (e) => {
    var reveals = document.getElementsByClassName("aboutsection")[0];

    var windowHeight = window.screen.height;

    var elementTop = reveals.getBoundingClientRect().top;
    var elementVisible = 150;

    var fabContainer = document.getElementsByClassName("fab-container")[0];
    fabContainer.style.display = "none";

    if (elementTop < windowHeight - elementVisible) {
      fabContainer.style.display = "block";
      setAnimateBar(true);
    } else {
      fabContainer.style.display = "none";
      setAnimateBar(false);
    }
  };

  return (
    <div>
      <NAVBAR />
      <Suspense fallback={<Loading />}>
        <div className="App">
          <HEADER />
          <ABOUT animateBar={animateBar} />
          <EXPERIENCE />
          {/* <PROJECT /> */}
          <CONTACT />
          <FOOTER />

          <Container>
            <Link
              style={{ backgroundColor: "#E60965 !important" }}
              href={RESUME}
              tooltip="Download Resume"
              icon="fas fa-user-plus"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M14 10h5l-7 8-7-8h5v-10h4v10zm4.213-8.246l-1.213 1.599c2.984 1.732 5 4.955 5 8.647 0 5.514-4.486 10-10 10s-10-4.486-10-10c0-3.692 2.016-6.915 5-8.647l-1.213-1.599c-3.465 2.103-5.787 5.897-5.787 10.246 0 6.627 5.373 12 12 12s12-5.373 12-12c0-4.349-2.322-8.143-5.787-10.246z" />
              </svg>
            </Link>
          </Container>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
