import React from "react";
import "./App.css";
import ChallengeList from "./components/ChallengeList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Edabit Clone</h1>
      </header>
      <main>
        <ChallengeList />
      </main>
    </div>
  );
}

export default App;
