import React, { useState, useEffect } from "react";
import "./eventHistory.css";

const EventHistory = () => {
  const [applications, setApplications] = useState([]);
  const [selectedAppId, setSelectedAppId] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("https://retoolapi.dev/71NNjB/applications")
      .then((res) => res.json())
      .then(setApplications)
      .catch((error) => console.error("Error loading applications:", error));
  }, []);

  useEffect(() => {
    if (selectedAppId) {
      fetch("https://retoolapi.dev/TYjDIe/eventhistory")
        .then((res) => res.json())
        .then((data) =>
          setHistory(
            data.filter(
              (event) => event.applicationId.toString() === selectedAppId
            )
          )
        )
        .catch((error) => console.error("Error loading event history:", error));
    } else {
      setHistory([]); 
    }
  }, [selectedAppId]);

  return (
    <div className="event-history-container">
      <div>
        <label htmlFor="application-select">Select Application: </label>
        <select
          id="application-select"
          value={selectedAppId}
          onChange={(e) => setSelectedAppId(e.target.value)}
        >
          <option value="">Select an Application</option>
          {applications.map((app) => (
            <option key={app.id} value={app.id}>
              {app.name}
            </option>
          ))}
        </select>
      </div>
      {history.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Event</th>
              <th>Status</th>
              <th>Version</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {history.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.event}</td>
                <td>{event.status}</td>
                <td>{event.version}</td>
                <td>{new Date(event.timestamp * 1000).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No events found or select an application.</p>
      )}
    </div>
  );
};

export default EventHistory;
