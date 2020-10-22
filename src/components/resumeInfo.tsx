import React from "react";
import SkillBar from "./skillBar";
import "../css/resumeInfo.css";

const ResumeInfo = () => {
  return (
    <div className="container py-5" id="resume">
      <div className="row flex-column flex-lg-row py-3 py-lg-5">
        <div className="col-lg-3 pl-lg-5 d-flex justify-content-center justify-content-lg-start pb-5">
          <h2 className="text-uppercase font-weight-bold">
            Education <hr className="sectionHeadUnderline" />
          </h2>
        </div>
        <div className="col-lg-9 pl-lg-5">
          <div className="resumeResponsiveHeader">
            <h3>Bow Valley College</h3>
            <p className="lead mb-0">Software Development Diploma</p>
            <p className="lead"> May 2020</p>
          </div>
          <p className="px-3 px-lg-0">
            During my two years at Bow Valley, I covered a wide breadth of
            topics relating to software development. Starting with the basics of
            programming with C++, then moving on to object orientated
            programming with C# and data structures/algorithms with Java. We
            moved on from C++ fairly quickly, but I spent a lot of quality
            coding time with C# and Java. I also gained a lot of experience
            working with relational databases, with two major databases designed
            and implemented in SQL server, along with plenty of practice with
            querying.
            <br /> <br />
            Throughout these courses I developed:
          </p>
          <ul className="resumeUL">
            <li className="resumeLI">Multiple console applications</li>
            <li className="resumeLI">An AI system for a unity game</li>
            <li className="resumeLI">
              An appointment booking system with Window Forms
            </li>
            <li className="resumeLI">
              A choose your own adventure text game built on trees
            </li>
            <li className="resumeLI">A brick breaker knockoff game </li>
            <li className="resumeLI">Many other small projects</li>
          </ul>
          <p className="px-3 px-lg-0">
            There were several courses devoted to web development, covering the
            basics of HTML and CSS then quickly diving into Javascript. One
            course was a studio style learning experience where myself and a
            team of four others worked on a Co-Working booking and filtering web
            app, which was a practical and fun taste of the development
            lifecycle. It also gave me plenty of experience working with API's.
            The end of my web experience was diving into ReactJS, which I
            discovered I had a good aptitude for, while also scratching the
            surface of web security. During a major project I gained a lot of
            valuable experience working with a NoSQL database and integrating it
            with react, getting my first taste of full-stack development.
          </p>
          <p className="px-3 px-lg-0">
            I also covered topics that were outside of pure coding as well.
            Project management and the agile development process was a prominent
            focus throughout my diploma. In addition, there was time spent
            studying systems anaylsis, and I practiced designing several
            systems. DevOps was also covered at the end of diploma and I got my
            feet wet in the cloud, gaining practical experience with AWS, Azure,
            and Docker.
          </p>
          <p className="px-3 px-lg-0">
            I gained a wide breadth of knowledge and skills relating to software
            development, in several different languages and technologies. I am
            well trained and eager to begin applying my skills.
          </p>
        </div>
      </div>
      <hr />
      <div className="row flex-column flex-lg-row py-3 py-lg-5">
        <div className="col-lg-3 pl-lg-5 d-flex justify-content-center justify-content-lg-start pb-5">
          <h2 className="text-uppercase font-weight-bold">
            Work <hr className="sectionHeadUnderline" />
          </h2>
        </div>
        <div className="col-lg-9 pl-lg-5">
          <div className="row">
            <div className="col">
              <div className="resumeResponsiveHeader">
                <h3>Gardaworld</h3>
                <p className="lead mb-0">Security Guard</p>
                <p className="lead"> May 2019 - Current</p>
              </div>
              <p className="px-3 px-lg-0">
                As a security guard for Gardaworld I have worked both full-time
                and part-time positions. I've also worked a number of different
                sites, ranging from office towers to parkades to events. At all
                times I have maintained excellent deportment and
                professionalism. My duties have consisted of patrolling, dealing
                with difficult people, and monitoring/managing complex security
                systems.
              </p>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col">
              <div className="resumeResponsiveHeader">
                <h3>Bow Valley College</h3>
                <p className="lead mb-0">Peer Tutor</p>
                <p className="lead"> January 2019 - May 2020</p>
              </div>
              <p className="px-3 px-lg-0">
                Led tutoring sessions of students on web, software and database
                development.
              </p>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col">
              <div className="resumeResponsiveHeader">
                <h3>Commissionaires</h3>
                <p className="lead mb-0">CRRT Member</p>
                <p className="lead"> 2014 - 2017</p>
              </div>
              <p className="px-3 px-lg-0">
                As a Calgary Rapid Response Team member, I was a junior
                supervisor entrusted with not only ensuring standards were met
                at sites, but also that there were never any critical staff
                deficiencies by covering any needed shifts. I also assisted with
                duties within dispatch and the office, monitoring/managing
                complex security systems and performing clerical work.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row flex-column flex-lg-row py-3 py-lg-5">
        <div className="col-lg-3 pl-lg-5 d-flex justify-content-center justify-content-lg-start pb-5">
          <h2 className="text-uppercase font-weight-bold">
            Skills <hr className="sectionHeadUnderline" />
          </h2>
        </div>
        <div className="col-lg-9 pl-lg-5">
          <SkillBar skillProgress={90} skillName="Git" />
          <SkillBar skillProgress={85} skillName="Javascript" />
          <SkillBar skillProgress={80} skillName="ReactJS" />
          <SkillBar skillProgress={90} skillName="HTML5" />
          <SkillBar skillProgress={60} skillName="CSS" />
          <SkillBar skillProgress={70} skillName="C#" />
          <SkillBar skillProgress={60} skillName="Java" />
          <SkillBar skillProgress={75} skillName="CouchDB" />
        </div>
      </div>
    </div>
  );
};

export default ResumeInfo;
