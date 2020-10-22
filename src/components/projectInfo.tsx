import React, { useState } from "react";
import "../css/projectInfo.css";

const ProjectInfo = () => {
  const [barhoppersHover, setBarhoppersHover] = useState(false);
  const [assesmentHover, setAssesmentHover] = useState(false);

  const handleBarhoppersTileHover = () => {
    setBarhoppersHover(!barhoppersHover);
  };

  const handleAssesmentTileHover = () => {
    setAssesmentHover(!assesmentHover);
  };

  return (
    <div className="container-fluid bg-dark text-white py-5" id="projects">
      <div className="container py-5">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h3 className="font-weight-bold text-uppercase">
              Here's some of the projects I've worked on
              <hr className="sectionHeadUnderline" />
            </h3>
          </div>
        </div>
        <div className="row flex-column flex-lg-row py-lg-5">
          <div className="col-12 col-lg d-flex justify-content-center py-5 pt-lg-5 pb-lg-0">
            <a
              href="https://www.barhoppers.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="noStyle"
            >
              <div
                className="projectTileBarhoppers"
                onMouseEnter={handleBarhoppersTileHover}
                onMouseLeave={handleBarhoppersTileHover}
              >
                <div
                  className={
                    barhoppersHover
                      ? "tileOverlay text-center d-flex align-items-center"
                      : "hideOverlay"
                  }
                >
                  <div className="px-3">
                    <h4 className="font-weight-bold">Barhoppers</h4>
                    <p className="pt-2">
                      I was the full stack developer on this web app. Used for
                      special comparison of bars/restaurants in Calgary with
                      lite social media features.
                    </p>
                    <p className="text-danger font-italic">
                      (Note mobile styling is not fully implemented)
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-lg d-flex justify-content-center pt-5">
            <a
              href="https://github.com/Nick-B-Land/frontend_assesment"
              target="_blank"
              rel="noopener noreferrer"
              className="noStyle"
            >
              <div
                className="projectTileFrontendAssesment"
                onMouseEnter={handleAssesmentTileHover}
                onMouseLeave={handleAssesmentTileHover}
              >
                <div
                  className={
                    assesmentHover
                      ? "tileOverlay text-center d-flex align-items-center"
                      : "hideOverlay"
                  }
                >
                  <div className="px-3">
                    <h4 className="font-weight-bold">Frontend Assesment</h4>
                    <p className="pt-2">
                      A recent assesment I scored highly on. Was given a API to
                      fetch data from, and a video showing a completed
                      assesment. Coded from scratch with ReactJS.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
