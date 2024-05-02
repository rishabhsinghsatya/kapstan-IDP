import React, { useState } from "react";
import "./metrics.css";
import CpuUtilizationChart from "../charts/CpuChart";
import MemoryUtilizationChart from "../charts/MemoryChart";

const Metrics = () => {
  const [activeTab, setActiveTab] = useState("CPU");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Inside your Metrics component in Metrics.js
return (
    <div className="tab-content">
      <div className="tab">
        <h>System metrics</h>
        <button
          className={activeTab === "CPU" ? "active" : ""}
          onClick={() => handleTabClick("CPU")}
        >
          CPU
        </button>
        <button
          className={activeTab === "Memory" ? "active" : ""}
          onClick={() => handleTabClick("Memory")}
        >
          Memory
        </button>
      </div>
      <div className="chart-container">
        {activeTab === "CPU" && <CpuUtilizationChart />}
        {activeTab === "Memory" && <MemoryUtilizationChart />}
      </div>
    </div>
  );
  
};

export default Metrics;
