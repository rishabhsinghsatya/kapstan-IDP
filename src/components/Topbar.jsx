import React, { useState, useEffect } from "react";
import "./topbar.css";
import { IoIosArrowDown } from "react-icons/io";
import Button from "@mui/material/Button"; // Assuming you may want to use it later

const TopBar = ({ onApplicationSelect }) => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState("");
  

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(
          "https://retoolapi.dev/71NNjB/applications"
        );
        const data = await response.json();
        setApplications(data);
        if (data.length > 0) {
          setSelectedApplication(data[0].name); 
          onApplicationSelect(data[0]); 
        }
      } catch (error) {
        console.error("Failed to fetch applications:", error);
      }
    };

    fetchApplications();
  }, [onApplicationSelect]);

  const handleSelectApplication = (event) => {
    const appName = event.target.value;
    setSelectedApplication(appName);
    const app = applications.find((app) => app.name === appName);
    onApplicationSelect(app);
  };

  const users = [
    { id: 1, name: "John Doe", initials: "JD" },
    { id: 2, name: "Jane Smith", initials: "JS" },
  ];

  const [selectedUser, setSelectedUser] = useState(users[0]);

  const handleChange = (event) => {
    const userId = parseInt(event.target.value, 10);
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
  };

  return (
    <div className="top-bar">
      <div className="applications">
        <label htmlFor="application-select">Applications</label>
        <select
          id="application-select"
          value={selectedApplication}
          onChange={handleSelectApplication}
        >
          {applications.map((app) => (
            <option key={app.id} value={app.name}>
              {app.name}
            </option>
          ))}
        </select>
        <IoIosArrowDown />
      </div>
      <div className="user_login">
        <p data-letters={selectedUser.initials}></p>
        <select onChange={handleChange} value={selectedUser.id}>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default TopBar;
