import React from "react";
import "./fileUploadModal.css";
import Download from "../../assets/images/download.png";

const FileUploadModal = ({ onClose, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="upload_container">
          <input type="file" id="uploadBtn" />
          <img src={Download} height="20px" width="22px" />
          <label for="uploadBtn"> Click or drag file(s) here to upload</label>
          {/* <button onClick={() => console.log("File uploaded")}>Upload</button> */}
        </div>
        <p>Upload a .env file. It should not be greater than 5KB.</p>
        <div
          className="bottom_buttons"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "end",
            paddingRight: "40px",
          }}
        >
          <button
            type="submit"
            onClick={onClose}
            className="bottom_close_button"
          >
            Close
          </button>
          <button type="submit" className="bottom_add_button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUploadModal;
