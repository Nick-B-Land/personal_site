import React, { useState, useEffect } from "react";
import "../css/nav.css";
import gsap from "gsap";

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [siteLocation, setSiteLocation] = useState("home");

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    let w = window.innerWidth;

    if (w > 992) {
      if (scrollPosition < 935) {
        setSiteLocation("home");
      } else if (scrollPosition >= 935 && scrollPosition < 1400)
        setSiteLocation("about");
      else if (scrollPosition >= 1400 && scrollPosition < 4100)
        setSiteLocation("resume");
      else if (scrollPosition >= 4100) setSiteLocation("projects");
    } else {
      if (scrollPosition < 600) {
        setSiteLocation("home");
      } else if (scrollPosition >= 600 && scrollPosition < 1400)
        setSiteLocation("about");
      else if (scrollPosition >= 1400 && scrollPosition < 5500)
        setSiteLocation("resume");
      else if (scrollPosition >= 5500) setSiteLocation("projects");
    }
  }, [scrollPosition]);

  useEffect(() => {
    gsap.fromTo(
      "#nav",
      { opacity: -1, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power1", delay: 1 }
    );

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        scrollPosition >= 100 && scrollPosition <= 600
          ? "hideNav"
          : scrollPosition < 100
          ? "d-flex justify-content-center mb-3 noBGNav"
          : "d-flex justify-content-center mb-3 navHeader"
      }
      id="nav"
    >
      <ul className="nav">
        <li className="nav-item mx-2">
          <a
            href="#home"
            className={siteLocation === "home" ? "navItemActive" : "noStyle"}
          >
            Home
          </a>
        </li>
        <li className="nav-item mx-2">
          <a
            href="#about"
            className={siteLocation === "about" ? "navItemActive" : "noStyle"}
          >
            About
          </a>
        </li>
        <li className="nav-item mx-2">
          <a
            href="#resume"
            className={siteLocation === "resume" ? "navItemActive" : "noStyle"}
          >
            Resume
          </a>
        </li>
        <li className="nav-item mx-2">
          <a
            href="#projects"
            className={
              siteLocation === "projects" ? "navItemActive" : "noStyle"
            }
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
