import React, { useState } from "react";
import "./addVariableModal.css"; 
import { useEnvironment } from '../context/EnvironmentContext';

const AddVariableModal = ({ onClose, isVisible }) => {
    const { addVariable } = useEnvironment(); 
    const [variableName, setVariableName] = useState("");
    const [variableValue, setVariableValue] = useState("");

    if (!isVisible) return null;

    const handleSubmit = () => {
        addVariable(variableName, variableValue); 
        onClose(); 
    };


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Add New Environment Variable</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={variableName}
              onChange={(e) => setVariableName(e.target.value)}
              required
            />
            <label>Value:</label>
            <input
              type="text"
              value={variableValue}
              onChange={(e) => setVariableValue(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddVariableModal;
