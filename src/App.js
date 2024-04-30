import React from "react";
import LeftPortion from "./components/LeftPortion";
import RightPortion from "./components/RightPortion";
import "../src/App.css";

function App() {
  return (
    <>
      <div className="containerStyle">
        <LeftPortion />
        <RightPortion />
      </div>
    </>
  );
}

export default App;
