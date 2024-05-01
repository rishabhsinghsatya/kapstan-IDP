// src/components/TopBar.js
import React, { useState, useEffect } from "react";
import "./topbar.css";
import { IoIosArrowDown } from "react-icons/io";
import Button from '@mui/material/Button';

const TopBar = ({ onApplicationSelect }) => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState("tic-tac-toe");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(
          "https://retoolapi.dev/71NNjB/applications"
        );
        const data = await response.json();
        setApplications(data);
        // Automatically select the Tic-Tac-Toe application
        const ticTacToeApp = data.find(
          (app) => app.name.toLowerCase() === "tic-tac-toe"
        );
        if (ticTacToeApp) {
          setSelectedApplication(ticTacToeApp.name);
          onApplicationSelect(ticTacToeApp);
        }
      } catch (error) {
        console.error("Failed to fetch applications:", error);
      }
    };

    fetchApplications();
  }, [onApplicationSelect]);

  const handleSelectApplication = (event) => {
    setSelectedApplication(event.target.value);
    onApplicationSelect(
      applications.find((app) => app.name === event.target.value)
    );
  };

  const users = [
    { id: 1, name: "John Doe", initials: "JD" },
    { id: 2, name: "Jane Smith", initials: "JS" },
  ];

  const [selectedUser, setSelectedUser] = useState(users[0]);

  // Handle changing the selected user
  const handleChange = (event) => {
    const userId = parseInt(event.target.value, 10);
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
  };

  return (
    <div className="top-bar">
      <div className="applications">
        <label htmlFor="application-select">Applications </label>
        <select
          id="application-select"
          value={selectedApplication}
          onChange={handleSelectApplication}
        >
          <option value="">Tic-Tac-Toe</option>
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
        {/* <Button variant="outlined">Outlined</Button> */}
    </div>
  );
};

export default TopBar;
