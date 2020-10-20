import React from "react";
import "../css/skillBar.css";

//
//Props:
//
//skillName: string, name of skill to show
//skillProgress: number, percent to fill skill bar
//

const SkillBar = (props: any) => {
  return (
    <div className="row mr-lg-5 pb-4 px-3 px-lg-0">
      <div className="col mr-lg-5">
        <h4>{props.skillName}</h4>
        <div className="skillTrack">
          <span
            style={{ width: props.skillProgress + "%" }}
            className="skillBar"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
