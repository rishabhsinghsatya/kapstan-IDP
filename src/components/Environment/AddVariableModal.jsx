import React, { useState } from "react";
import "./addVariableModal.css";
import { useEnvironment } from "../context/EnvironmentContext";
import DeleteIcon from "../../assets/images/delete.png";

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
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
          <div className="form-group">
            Name
            <input
              type="text"
              value={variableName}
              onChange={(e) => setVariableName(e.target.value)}
              required
            />
            Value
            <input
              type="text"
              value={variableValue}
              onChange={(e) => setVariableValue(e.target.value)}
              required
            />
            <img src={DeleteIcon} height="26px" />
          </div>
          <div className="bottom_buttons" style={{ display: "flex", gap: "1rem", justifyContent: "end",paddingRight:"40px" }}>
            <button type="button" onClick={onClose} className="bottom_close_button">Close</button>
            <button type="submit" className="bottom_add_button">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVariableModal;
