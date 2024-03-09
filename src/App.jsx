import { useState } from "react";

import TopHeader from "./components/TopHeader";
import HeroSection from "./components/HeroSection";

import "./css/Button.css";
import "./css/App.css";

function App() {
  const [activeLink, setActiveLink] = useState("Hero-Section");
  const handleLinkClick = (Link) => {
    setActiveLink(Link);
  };

  return (
    <>
      <TopHeader />
      <div id="Section-Container">
        <section id="Hero-Section" className="Section">
          <div id="Hero-Content-Grid">
            <div id="Hero-Content-Container">
              <HeroSection />
            </div>
            <div id="Hero-Button-Container">
              <button>Projects</button>
              <button>Contact Me</button>
            </div>
          </div>
        </section>
        <section id="AboutMe-Section" className="Section">
          <h2>Something about me</h2>
        </section>
        <section id="Skills-Section" className="Section">
          <h2>These are the Programming Skills I possess:</h2>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6)</li>
          </ul>
        </section>
        <section id="Projects-Section" className="Section"></section>
        <section id="Contact-Section" className="Section"></section>
        <section id="Footer-Section" className="Section"></section>
      </div>
    </>
  );
}

export default App;
