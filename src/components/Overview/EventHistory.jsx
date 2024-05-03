import React, { useState, useEffect } from "react";
import "./eventHistory.css";
import Button from "@mui/material/Button";

const EventHistory = () => {
  const [applications, setApplications] = useState([]);
  const [selectedAppId, setSelectedAppId] = useState(""); // Initialize without a default ID
  const [history, setHistory] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://retoolapi.dev/71NNjB/applications")
      .then((res) => res.json())
      .then((apps) => {
        setApplications(apps);
        if (apps && apps.length > 0) {
          setSelectedAppId(apps[0].id.toString()); // Set the first application as default
        }
      })
      .catch((error) => console.error("Error loading applications:", error));
  }, []);

  useEffect(() => {
    if (selectedAppId) {
      fetch(
        `https://retoolapi.dev/TYjDIe/eventhistory?applicationId=${selectedAppId}`
      )
        .then((res) => res.json())
        .then((data) => {
          setHistory(
            data.filter(
              (event) => event.applicationId.toString() === selectedAppId
            )
          );
        })
        .catch((error) => console.error("Error loading event history:", error));
    } else {
      setHistory([]);
    }
  }, [selectedAppId]);

  const displayedHistory = showAll ? history : history.slice(0, 4);

  function formatDuration(timestamp) {
    const date = new Date(timestamp * 1000);
    const now = new Date();
    const durationInHours = Math.abs(now - date) / (1000 * 60 * 60);

    if (durationInHours < 24) {
      return `${date.getHours()} hours ago`;
    } else {
      const durationInDays = Math.floor(durationInHours / 24);
      return `${durationInDays} days ago`;
    }
  }

  function getStatusStyle(status) {
    switch (status.toLowerCase()) {
      case "in_progress":
        return {
          backgroundColor: "white",
          color: "#F39C12",
          border: "1px solid #F39C12",
        };
      case "failed":
        return {
          backgroundColor: "white",
          color: "#E91F04",
          border: "1px solid #E91F04",
        };
      case "successful":
        return {
          backgroundColor: "white",
          color: "#00B88C",
          border: "1px solid #00B88C",
        };
      default:
        return {
          backgroundColor: "white",
          color: "grey",
          border: "1px solid grey",
        };
    }
  }

  return (
    <div className="event-history-container">
      {/* <div>
        <label htmlFor="application-select">Select Application: </label>
        <select
          id="application-select"
          value={selectedAppId}
          onChange={(e) => setSelectedAppId(e.target.value)}
        >
          {applications.map((app) => (
            <option key={app.id} value={app.id}>
              {app.name}
            </option>
          ))}
        </select>
      </div> */}
      {history.length > 0 ? (
        <>
          <h
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "-0.01em",
              textAlign: "left",
              padding:"12px 12px",
              color: "#595959",
            }}
          >
            Event History
          </h>
          <div className="heading">
            <h>Event</h>
            <h>Version</h>
            <h>Status</h>
          </div>
          <div
            className="all_items"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {displayedHistory.map((event) => (
              <div className="row_item_HR">
                <div className="row_item">
                  <div className="deploy_or_time">
                    <h>{event.event}</h>
                    <p>{formatDuration(event.timestamp)}</p>
                  </div>
                  <h>{event.version}</h>
                  <button
                    variant="outlined"
                    size="small"
                    style={getStatusStyle(event.status)}
                  >
                    {event.status}
                  </button>
                </div>
                <hr className="new_hr" />
              </div>
            ))}
          </div>
          <button className="view_more" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View More"}
          </button>
        </>
      ) : (
        <p>No events found or select an application.</p>
      )}
    </div>
  );
};

export default EventHistory;
