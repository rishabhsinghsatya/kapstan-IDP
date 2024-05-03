import React from "react";
import "./fileUploadModal.css"; 

const FileUploadModal = ({ onClose, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Upload Environment Variables</h2>

        <input type="file" id="uploadBtn"/>
        {/* <button onClick={() => console.log("File uploaded")}>Upload</button> */}
      </div>
    </div>
  );
};

export default FileUploadModal;
