import React from "react";
import pdf from "../pdfs/resume2020.pdf";
import "../css/aboutMe.css";

const AboutMe = (props: any) => {
  return (
    <div className="container-fluid bg-dark text-white py-5" id="about">
      <div className="container py-lg-5">
        <div className="row flex-column flex-lg-row">
          <div className="col-lg-3 py-5 py-lg-0 pl-lg-5 d-flex justify-content-center">
            <div className="profilePic"></div>
          </div>
          <div className="col-lg-9 pl-5">
            <div className="row">
              <div className="col">
                <h3>About Me</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>
                  I'm a Junior Software Developer. I completed a Software
                  Development Diploma in 2020 at the top of my class. I have a
                  passion for front-end developement with the goal of becoming a
                  full stack developer. I am always honing my skills and
                  learning new things. You'll find everything you need to know
                  about me here, including my resume and completed works.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>Contact</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>
                  Calgary, Alberta <br /> (403) 680-7186 <br />
                  T2Z 0A3
                  <br />
                  nicklandiam@gmail.com
                </p>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col d-flex justify-content-center justify-content-lg-start">
                <button className="btn btn-lg btn-light">
                  <a href={pdf} download className="noStyle">
                    Download Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
