// src/components/RightPortion.js
import React, { useState } from 'react';
import TopBar from './Topbar';
import ApplicationDetails from './applications/ApplicationDetails';

const RightPortion = ({ isSidebarExpanded }) => {
  const [selectedApp, setSelectedApp] = useState(null);

  return (
    <div className="right_portion">
      <TopBar onApplicationSelect={setSelectedApp} />
      <div>
        {/* <h1>{isSidebarExpanded ? "Expanded View" : "Collapsed View"}</h1> */}
        {selectedApp ? <ApplicationDetails app={selectedApp} /> : <p>No application selected.</p>}
      </div>
    </div>
  );
};

export default RightPortion;
