// src/components/RightPortion.js
import React from "react";
import "../components/rightPortion.css";

const RightPortion = ({ isSidebarExpanded }) => {
  return (
    <div className="right_portion">
      <h1>{isSidebarExpanded ? "Expanded View" : "Collapsed View"}</h1>
    </div>
  );
};

export default RightPortion;
