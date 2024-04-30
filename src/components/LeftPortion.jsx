import React from "react";
import "../components/leftPortion.css";
import Logo from "../assets/icons/Kapstan.svg";

const LeftPortion = () => {
  return (
    <>
      <div className="left_portion">
        <img src={Logo} alt="Description of SVG" />
      </div>
    </>
  );
};

export default LeftPortion;
