import React, { useState } from "react";
import "../css/projectInfo.css";

const ProjectInfo = () => {
  const [barhoppersHover, setBarhoppersHover] = useState(false);

  const handleBarhoppersTileHover = () => {
    setBarhoppersHover(!barhoppersHover);
  };

  return (
    <div className="container-fluid bg-dark text-white py-5" id="projects">
      <div className="container py-5">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h3>Here are some of the projects I've worked on.</h3>
          </div>
        </div>
        <div className="row py-5">
          <div className="col d-flex justify-content-center pt-5">
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
                      ? "barhoppersTileOverlay text-center d-flex align-items-center"
                      : "hideOverlay"
                  }
                >
                  <div className="px-3">
                    <h4 className="font-weight-bold">Barhoppers</h4>
                    <p className="pt-2">
                      Web app I was the full stack developer on. Used for
                      special comparison of bars/restaurants in Calgary with
                      lite social media features.
                    </p>
                    <p className="text-danger font-italic">
                      (Note mobile styling is not implemented fully)
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
