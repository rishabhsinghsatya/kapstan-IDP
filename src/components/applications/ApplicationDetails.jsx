import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./Overview";
import EnvVariable from "./EnvVariable";
import Alerts from "./Alerts";
import History from "./History";
import Navbar from "./AppNavbar";
import Button from "@mui/material/Button";

const ApplicationDetails = ({ app }) => {
  return (
    <div>
      <div
        className="app_name"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 20px 0px 20px",
        }}
      >
        <h
          style={{
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "-0.01em",
            textAlign: "left",
            color: "#595959",
          }}
        >
          {app.name}
        </h>
        <Button
          style={{
            width: "95px",
            height: "26px",
            border: "2px solid #00B88C",
            color: "#00B88C",
            fontSize: "14px",
            fontWeight: "500",
          }}
          variant="outlined"
        >
          •Outlined
        </Button>
      </div>

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

     
    </div>
  );
};

export default ApplicationDetails;
