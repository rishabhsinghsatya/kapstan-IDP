// src/components/LeftPortion.js
import React, { useState } from "react";
import "../components/leftPortion.css";
import Logo from "../assets/icons/Logomark.svg";
import Kapstan from "../assets/icons/Vector.svg";
import Application from "../assets/icons/Apps.svg";
import Connection from "../assets/icons/Link.svg";
import Cost from "../assets/icons/Money.svg";
import Security from "../assets/icons/Shield.svg";
import Admin from "../assets/icons/User.svg";
import Docs from "../assets/icons/Docs.svg";

import Arrow from "../assets/icons/Left.svg";
// import RightArrow from "../assets/icons/Right.svg";
// import Logo from "../assets/icons/Kapstan.svg";
// import HomeIcon from "../assets/icons/home.svg"; // Assuming you have a home icon
// import AboutIcon from "../assets/icons/about.svg"; // Assuming you have an about icon

const LeftPortion = () => {
  const [isExpanded, setIsExpanded] = useState(true); // State to track if the navbar is expanded

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded); // Toggle the state between true and false
  };

  return (
    <div
      className={
        isExpanded ? "left_portion expanded" : "left_portion collapsed"
      }
    >
      <div className="upper_part">
        <div className="menu-item">
          <img src={Logo} alt="Home" />
          {isExpanded && <img src={Kapstan} />}
        </div>
        <hr style={{borderTop:" 1px solid purple"}}/>
        <div className="menu-item">
          <img src={Application} alt="Home" />
          {isExpanded && <span>Applications</span>}
        </div>
        {/* <hr /> */}

        <div className="menu-item">
          <img src={Connection} alt="About" />
          {isExpanded && <span>Connection</span>}
        </div>
        <div className="menu-item">
          <img src={Cost} alt="Logo" />
          {isExpanded && <span>Cost</span>}
        </div>
        <div className="menu-item">
          <img src={Security} alt="Logo" />
          {isExpanded && <span>Security</span>}
        </div>
        {/* <hr /> */}
      </div>
      <div className="lower_part">
        <div className="menu-item">
          <img src={Admin} alt="Logo" />
          {isExpanded && <span>Admin</span>}
        </div>
        <div className="menu-item">
          <img src={Docs} alt="Logo" />
          {isExpanded && <span>Docs</span>}
        </div>
        {/* <hr /> */}
        <button onClick={toggleNavbar} className="toggle-btn">
          <img
            src={isExpanded ? Arrow : Arrow}
            alt={isExpanded ? "Collapse" : "Expand"}
          />
        </button>
      </div>
    </div>
  );
};

export default LeftPortion;

//icons downloD
