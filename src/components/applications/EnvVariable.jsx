import React, { useState } from "react";
import AddIcon from "../../assets/images/Button icon.png";
import DownloadIcon from "../../assets/images/Download icon.png";
import "./envVariable.css";
import FileUploadModal from "../Environment/FileUploadModal";
import AddVariableModal from "../Environment/AddVariableModal";
import { useEnvironment } from "../context/EnvironmentContext";

const EnvVariable = () => {
  const { variables, deleteVariable } = useEnvironment();
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);

  const handleDownloadVariables = () => {
    setUploadModalVisible(true);
  };

  const handleCloseUploadModal = () => {
    setUploadModalVisible(false);
  };

  const handleAddVariable = () => {
    setAddModalVisible(true);
  };

  const handleCloseAddModal = () => {
    setAddModalVisible(false);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <p>Environment Variable</p>
          <div className="both_icon">
            <img src={AddIcon} alt="Add Variable" onClick={handleAddVariable} />
            <img src={DownloadIcon} alt="Download Variables" onClick={handleDownloadVariables} />
          </div>
        </div>
        {variables.length === 0 ? (
          <h>No environment variable created.</h>
        ) : (
          <div>
            {variables.map((variable, index) => (
              <div key={index} className="variable-entry">
                {variable.name}: {variable.value}
                <button onClick={() => deleteVariable(index)} className="delete-btn">
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <FileUploadModal
        isVisible={uploadModalVisible}
        onClose={handleCloseUploadModal}
      />
      <AddVariableModal
        isVisible={addModalVisible}
        onClose={handleCloseAddModal}
      />
    </>
  );
};

export default EnvVariable;
