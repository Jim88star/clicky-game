import React from "react";
import "../styles/Card.css";


const Panel = () => (
  <div className="card">
    <div className="card-header">
      <h3 className="card-title">Several randomized images go here</h3>
    </div>
    <div className="card-body">
      <p className="card-text">
        After each click, score increases if not selected previously. Images are then shuffled. Play continues until duplicate is clicked. Score returns to zero and high score is updated.
      </p>
    </div>
  </div>
);

export default Panel;
