import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import BookDetail from "./BookDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Recommended Book List</h1>
      <h2>From the Ladies of BAW</h2>
      <BookDetail />
      <div className="card">
        <h3>Click to log your visit</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          visit # {count}
        </button>
      </div>
      <div>
        <button>Search by Author</button>
        <button>Search by Likes</button>
        <button>Search by Awards</button>
        <button>See Whole List</button>
        <button>Recommend</button>
      </div>
    </>
  );
}

export default App;
