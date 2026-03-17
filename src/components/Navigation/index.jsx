import React, { useEffect, useState } from "react";

function Navigation() {

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
   };
  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const handleScroll = () => {

      // Navbar background change
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // ScrollSpy
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg justify-content-between top-main-nav fixed-top ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="container">
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarName"
                onClick={toggleMenu}
                >
                <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
        <div className="collapse navbar-collapse" id="navbarName">
        <ul className="navbar-nav ms-auto me-auto">

          <li className="nav-item">
            <a
              href="#about"
              className={`nav-link px-3 ${
                activeSection === "about" ? "active" : ""
              }`}
            >
              About
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#intro"
              className={`nav-link px-3 ${
                activeSection === "intro" ? "active" : ""
              }`}
            >
              Intro
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#experties"
              className={`nav-link px-3 ${
                activeSection === "experties" ? "active" : ""
              }`}
            >
              Skills
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#exp"
              className={`nav-link px-3 ${
                activeSection === "exp" ? "active" : ""
              }`}
            >
              Experience
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#work"
              className={`nav-link px-3 ${
                activeSection === "work" ? "active" : ""
              }`}
            >
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#contact"
              className={`nav-link px-3 ${
                activeSection === "contact" ? "active" : ""
              }`}
            >
              Contact
            </a>
          </li>

        </ul>
       </div>
      </div>
    </nav>
  );
}

export default Navigation;