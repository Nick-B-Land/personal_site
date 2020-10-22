import React from "react";
import "../css/homeInfo.css";
import Nav from "./nav";

const HomeInfo = (props: any) => {
  return (
    <div className="container-fluid py-5 homeContainer" id="home">
      <div className="row">
        <div className="col">
          <Nav />
        </div>
      </div>
      <div className="homeCenter">
        <div className="row pt-5">
          <div className="col d-flex justify-content-center">
            <h1 className="display-2 font-weight-bold homeLeadName">
              I'm Nick Land.
            </h1>
          </div>
        </div>
        <div className="row pb-1">
          <div className="col d-flex align-items-center">
            <h5 className="homeText">
              I'm a Software Developer based in Calgary, Alberta. Young,
              talented and passionate, I give 150% to every project I work on.
              Currently seeking new opportunities wherever they may take me.
            </h5>
          </div>
        </div>
        <hr className="homeInfoLine" />
        <div className="row pb-1">
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
                <i className="fab fa-github fa-2x px-3 socialsBtn" />
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/nick-land-533098171/"
                className="noStyle"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fab fa-linkedin-in fa-2x px-3 socialsBtn" />
              </a>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex flex-column justify-content-center">
            <a href="#about" className="noStyle">
              <i className="fas fa-chevron-circle-down fa-3x homeDownBtn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
