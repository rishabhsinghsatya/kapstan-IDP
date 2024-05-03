import React, { useState } from "react";
import LeftPortion from "./components/LeftPortion";
import RightPortion from "./components/RightPortion";
import "./App.css";
import { EnvironmentProvider } from "./components/context/EnvironmentContext";
import { ApplicationProvider } from "./components/context/ApplicationContext";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState(null);

  return (
    <ApplicationProvider>
      <EnvironmentProvider>
        <div className="container_Style">
          <LeftPortion
            isExpanded={isSidebarExpanded}
            setIsExpanded={setIsSidebarExpanded}
          />
          <RightPortion isSidebarExpanded={isSidebarExpanded} />
        </div>
      </EnvironmentProvider>
    </ApplicationProvider>
  );
}

export default App;
