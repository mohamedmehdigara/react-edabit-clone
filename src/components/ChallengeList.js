import React, { useState } from "react";
import ChallengeCard from "./ChallengeCard";
import challenges from "../data/challenges";

const ChallengeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const challengesPerPage = 6; // Number of challenges to display per page

  // Filter the challenges based on the search term and selected difficulty
  const filteredChallenges = challenges.filter((challenge) => {
    const titleMatches = challenge.title.toLowerCase().includes(searchTerm.toLowerCase());
    const difficultyMatches = selectedDifficulty === "All" || challenge.difficulty === selectedDifficulty;
    return titleMatches && difficultyMatches;
  });

  // Get the challenges for the current page
  const indexOfLastChallenge = currentPage * challengesPerPage;
  const indexOfFirstChallenge = indexOfLastChallenge - challengesPerPage;
  const currentChallenges = filteredChallenges.slice(indexOfFirstChallenge, indexOfLastChallenge);

  // Change the current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // List of unique difficulty levels for the filter options
  const difficultyLevels = ["All", "Easy", "Medium", "Hard"];

  return (
    <div className="challenge-list">
      <div className="filters">
        <input
          type="text"
          placeholder="Search challenges..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          {difficultyLevels.map((difficulty, index) => (
            <option key={index} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>
      </div>
      {currentChallenges.map((challenge) => (
        <ChallengeCard key={challenge.id} challenge={challenge} />
      ))}
      <div className="pagination">
        {/* Generate pagination buttons */}
        {Array.from({ length: Math.ceil(filteredChallenges.length / challengesPerPage) }).map(
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ChallengeList;
