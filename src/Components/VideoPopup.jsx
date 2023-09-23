
import React from "react";
import './videopopup.css'

const VideoPopup = ({ video, onClose }) => {
  return (
    <div className="video-popup">
      <div className="video-content">
        <iframe
          title={video.name}
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${video.key}`}
          frameborder="0"
          allowfullscreen
        ></iframe>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default VideoPopup;
