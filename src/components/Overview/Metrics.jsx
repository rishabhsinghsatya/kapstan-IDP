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
    <div>
      <div className="tab-content">
        <div className="tab">
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
        {activeTab === "CPU" && (
          <div>
            <CpuUtilizationChart />
          </div>
        )}
        {activeTab === "Memory" && (
          <div>
            <MemoryUtilizationChart />
          </div>
        )}
      </div>
    </div>
  );
};

export default Metrics;
