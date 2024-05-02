import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./serviceInfo.css";
import Icon from "../../assets/images/Icon.png";

const ServiceInfo = () => {
  return (
    <div className="container">
      <div className="upper">
        <div className="service_info">
          <p
            style={{
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "-0.01em",
              textAlign: "left",
              color: "#595959",
            }}
          >
            Service info
          </p>
          {/* <IoIosArrowDown /> */}
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
            <h
              style={{
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "-0.01em",
                textAlign: "left",
                color: "#595959",
              }}
            >
              Current version
            </h>
            <div>
              <img src={Icon} height="15px" alignItems="start"/>
              <h
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "24px",
                  letterSpacing: "-0.01em",
                  textAlign: "left",
                  color: "#595959",
                }}
              >
                In sync
              </h>
            </div>
          </div>
          <div
            className="desired_version"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h
              style={{
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "-0.01em",
                textAlign: "left",
                color: "#595959",
              }}
            >
              Desired version
            </h>
            <h
              style={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "-0.01em",
                textAlign: "left",
                color: "#595959",
              }}
            >
              1.2.1
            </h>
          </div>
        </div>
      </div>
      <div
        className="deploy"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <button className="deploy_button">Deploy</button>
        <h
          style={{
            fontSize: "12px",
            fontWeight: "500",
            lineHeight: "18px",
            letterSpacing: "-0.01em",
            textAlign: "left",
            color: "#595959",
          }}
        >
          Last updated 5 hours ago
        </h>
      </div>
    </div>
  );
};

export default ServiceInfo;
