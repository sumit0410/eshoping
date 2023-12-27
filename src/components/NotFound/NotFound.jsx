import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="content">
        <span className="title">Error : 404</span>
        <span className="para">
          The page you are trying reach does not exist!
        </span>
        <button>
          <Link to="/">Go to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
