// src/App.js
import React, { useState } from "react";
import LeftPortion from "./components/LeftPortion";
import RightPortion from "./components/RightPortion";
import "./App.css";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  return (
    <div className="containerStyle">
      <LeftPortion
        isExpanded={isSidebarExpanded}
        setIsExpanded={setIsSidebarExpanded}
      />
      <RightPortion isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
}

export default App;
