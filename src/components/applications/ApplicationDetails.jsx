import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./Overview";
import EnvVariable from "./EnvVariable";
import Alerts from "./Alerts";
import History from "./History";
import Navbar from "./AppNavbar";

const ApplicationDetails = ({ app }) => {
  return (
    <div>
      <h2>{app.name}</h2>

      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/environment-variable" element={<EnvVariable />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </Router>

      {/* <p>Status: {app.status}</p>
      <p>Current Version: {app.version}</p>
      <p>Desired Version: {app.desiredVersion}</p>
      <p>
        Last Updated:{" "}
        {new Date(parseInt(app.updatedAt) * 1000).toLocaleDateString()}
      </p> */}
    </div>
  );
};

export default ApplicationDetails;
