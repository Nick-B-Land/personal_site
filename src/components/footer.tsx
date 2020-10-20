import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footerBG py-3">
      <div className="container py-3">
        <div className="row pb-5">
          <div className="col d-flex justify-content-center">
            <a href="#home" className="noStyle">
              <i className="fas fa-chevron-circle-up fa-3x footerBtn" />
            </a>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col d-flex justify-content-center">
            <span className="homeSocialsRow">
              {" "}
              <a
                href="https://github.com/nick-B-Land/"
                className="noStyle"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fab fa-github fa-2x px-3 footerBtn" />
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/nick-land-533098171/"
                className="noStyle"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fab fa-linkedin-in fa-2x px-3 footerBtn" />
              </a>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h5>&copy; Nick Land 2020</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
