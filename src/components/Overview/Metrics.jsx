import React, { useState } from "react";
import "./metrics.css";
import CpuUtilizationChart from "../charts/CpuChart";
import MemoryUtilizationChart from "../charts/MemoryChart";

const Metrics = () => {
  const [activeTab, setActiveTab] = useState("CPU");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-content">
      <div className="chart-container">
        <div className="tab">
          {/* <h>System metrics</h> */}
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
        {activeTab === "CPU" && <CpuUtilizationChart />}
      </div>
      {activeTab === "Memory" && <MemoryUtilizationChart />}
    </div>
  );
};

export default Metrics;
