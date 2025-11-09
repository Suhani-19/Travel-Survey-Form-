import React from "react";
import { Link } from "react-router-dom";
import "../App.css"


function FinalSubmit() {
  return (
    <div className="page-container">
        <div className="content-box">
      <h2>Final Submit Page</h2>
      <p>Review and finalize your submission.</p>
      <Link to="/thankyou">Go to Thank You Page</Link>
    </div>
</div>
  );
}

export default FinalSubmit;
