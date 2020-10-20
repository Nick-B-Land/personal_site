import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import HomeInfo from "./components/homeInfo";
import AboutMe from "./components/aboutMe";
import ResumeInfo from "./components/resumeInfo";
import ProjectInfo from "./components/projectInfo";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <HomeInfo />
      <AboutMe />
      <ResumeInfo />
      <ProjectInfo />
      <Footer />
    </>
  );
}

export default App;
