import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Use LinkedIn & Instagram icons

const AuthorDetails = ({ author }) => {
  return (
    <div className="author-details d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center mt-5">
      <div className="d-flex align-items-center justify-content-between justify-content-md-start w-100 w-md-auto gap-1 gap-md-3">
        <div className="d-flex gap-2 align-items-center">
          <img src={author.avatar} alt={author.name} className="author-avatar me-2" />
          <h6 className="mb-0 fw-bold">{author.name}</h6>
        </div>
        <div className="d-flex gap-2 align-items-center ms-2">
          <span className="date-badge">{author.date}</span>
          <p className="read-time mb-0">{author.readTime}</p>
        </div>
      </div>

      <div className="d-flex gap-1 gap-md-3 align-items-center mt-3 mt-md-0">
        <p className="mb-0 me-2">Share</p>
        <FaLinkedin className="share-icon" />
        <FaInstagram className="share-icon ms-2" />
      </div>
    </div>
  );
};

export default AuthorDetails;
