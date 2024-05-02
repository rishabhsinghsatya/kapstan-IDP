import React, { useState } from "react";
import LeftPortion from "./components/LeftPortion";
import RightPortion from "./components/RightPortion";
import "./App.css";
import { EnvironmentProvider } from "./components/context/EnvironmentContext";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  return (
    <EnvironmentProvider>
      <div className="containerStyle">
        <LeftPortion
          isExpanded={isSidebarExpanded}
          setIsExpanded={setIsSidebarExpanded}
        />
        <RightPortion isSidebarExpanded={isSidebarExpanded} />
      </div>
    </EnvironmentProvider>
  );
}

export default App;
