import React from "react";

const ChallengeCard = ({ challenge }) => {
  const { id, title, description, difficulty } = challenge;
  const points = 100; // You can add a points property to each challenge in challenges.js

  // Sample tags for demonstration purposes
  const tags = ["Math", "Strings", "Arrays"];

  return (
    <div className="challenge-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="challenge-details">
        <span>Difficulty: {difficulty}</span>
        <span>Points: {points}</span>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="challenge-actions">
        <button className="btn btn-view">View Details</button>
        <button className="btn btn-attempt">Attempt Challenge</button>
      </div>
    </div>
  );
};

export default ChallengeCard;
