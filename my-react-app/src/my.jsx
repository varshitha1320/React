import { useState } from 'react';

function Navbar({ setPage, toggleDark }) {
  return (
    <nav className="navbar">
      <h1>Anime World</h1>
      <ul>
        <li onClick={() => setPage("home")}>Home</li>
        <li onClick={() => setPage("characters")}>Character Explorer</li>
        <li onClick={() => setPage("watchlist")}>Watchlist</li>
        <li onClick={() => setPage("quiz")}>Quiz Game</li>
        <li onClick={() => setPage("recommendations")}>Recommendations</li>
      </ul>
      <button onClick={toggleDark}>🌙 Toggle Dark</button>
    </nav>
  );
}

function Home() {
  return (
    <div className="home">
      <h2>Trending Anime</h2>
      <p>List of trending anime here...</p>
      <h2>Search Anime</h2>
      <p>Search bar and results...</p>
      <h2>Favorites</h2>
      <p>Your favorite anime list...</p>
      <h2>Profile</h2>
      <p>User profile info...</p>
    </div>
  );
}

function CharacterExplorer() {
  return (
    <div className="page">
      <h2>Anime Character Explorer</h2>
      <p>Search characters, filter by series, popularity rankings...</p>
    </div>
  );
}

function Watchlist() {
  return (
    <div className="page">
      <h2>Anime Watchlist Tracker</h2>
      <p>Add anime, mark Watching/Completed, track progress...</p>
    </div>
  );
}

function QuizGame() {
  return (
    <div className="page">
      <h2>Anime Quiz Game</h2>
      <p>Guess the anime from an image, multiple-choice, score system...</p>
    </div>
  );
}

function Recommendations() {
  return (
    <div className="page">
      <h2>Anime Recommendation App</h2>
      <p>Select genres, get recommendations, save favorites...</p>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  const renderPage = () => {
    switch(page) {
      case "home": return <Home />;
      case "characters": return <CharacterExplorer />;
      case "watchlist": return <Watchlist />;
      case "quiz": return <QuizGame />;
      case "recommendations": return <Recommendations />;
      default: return <Home />;
    }
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar setPage={setPage} toggleDark={() => setDarkMode(!darkMode)} />
      {renderPage()}
    </div>
  );
}

export default App;
