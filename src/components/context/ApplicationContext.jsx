import React, { createContext, useContext, useState } from "react";

const ApplicationContext = createContext(null);

export const useApplication = () => useContext(ApplicationContext);

export const ApplicationProvider = ({ children }) => {
  const [selectedApplication, setSelectedApplication] = useState(null);

  return (
    <ApplicationContext.Provider value={{ selectedApplication, setSelectedApplication }}>
      {children}
    </ApplicationContext.Provider>
  );
};
