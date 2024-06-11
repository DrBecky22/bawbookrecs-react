import { useState } from "react";
import { Card, Button } from "reactstrap";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import { BooksDB } from "./BooksDB";
// import fantasy from "./assets/fantasy.jpg";
import pirin from "./assets/Pirin Tablets.jpg";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={pirin} className="logo" alt="Pirin Tablet" />
        </a>
      </div>
      <h1>The BAW Book List</h1>
      <h2>Books Are Medicine</h2>
      <div className="card">
        <h3>Click to log your visit</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          visit # {count}
        </button>
      </div>
      <div>
        <Button>Recommend A Book</Button>
        <h2>Search Books By:</h2>
        <Button className="btn btn-primary me-2" onClick="">Author</Button>
        <Button>Likes</Button>
        <Button>Awards</Button>
        <Button>See All</Button>
        
      </div>
      <div className="flex">
        {BooksDB.map((book) => 
          <Card key={book.id} >
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Likes: {book.likes}</p>
            <Button>Details</Button>
          </Card>
        )}
      </div>
    </>
  );
}

export default App;
