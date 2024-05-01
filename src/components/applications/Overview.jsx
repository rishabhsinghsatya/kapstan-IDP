import React from "react";
import ServiceInfo from "../Overview/ServiceInfo";
import Metrics from "../Overview/Metrics";
import EventHistory from "../Overview/EventHistory";
import "./overview.css";

const Overview = () => {
  return (
    <>
      <ServiceInfo />
      <div className="chart_history">
        <Metrics />
        <EventHistory />
      </div>
    </>
  );
};

export default Overview;
