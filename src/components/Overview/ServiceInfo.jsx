import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./serviceInfo.css";
import Icon from "../../assets/images/Icon.png";

const ServiceInfo = () => {
  return (
    <div className="container">
      <div className="upper">
        {" "}
        <div className="service_info">
          <p>ServiceInfo</p>
          <IoIosArrowDown />
        </div>
        <div
          className="version"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div className="current_version">
            <h>Current version</h>
            <div>
              <img src={Icon} />
              <h>In sync</h>
            </div>
          </div>
          <div
            className="desired_version"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h>Desired version</h>
            <h>1.2.1</h>
          </div>
        </div>
      </div>
      <div
        className="deploy"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <button className="deploy_button">Deploy</button>
        <h>Last updated 5 hours ago</h>
      </div>
    </div>
  );
};

export default ServiceInfo;
