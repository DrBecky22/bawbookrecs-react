// import fantasy from "./assets/fantasy.jpg";
import pirin from "./assets/Pirin.jpg";
import { useState } from "react";
import { Card, Button } from "reactstrap";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import BookForm from "./BookForm";


import { BooksDB } from "./BooksDB";




function App() {
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>

      <h1>The BAW Book List</h1>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={pirin} className="logo" alt="Pirin Tablet" />
        </a>
      </div>
      <h2>Great Stories are Medicine</h2>
      <div className="card">
        <h3>Click to log your visit</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          visit # {count}
        </button>
      </div>
      <div>
        <Button color="success" onClick={()=> setOpenModal(true) }>
            Recommend A Book    
        </Button>

        <h2>Search Books By:</h2>
        <Button color="success">Author</Button>
        <Button>Likes</Button>
        <Button>Awards</Button>
        <Button>See All</Button>
      </div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        border: "1px solid red",
        backgroundColor: "darkgray",
        padding: "20px", 
        margin: "20px"
      }} className="cardDeck"
      >

        {BooksDB.map((book) => 
          <Card key={book.id} 
            style={{
              border: "1px solid black",
              backgroundColor: "lightgray", 
              borderRadius: "10px",
              margin: "10px",
            }}
              >
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p>Genres: {book.genres}</p>
            <p>Likes: {book.likes}</p>
            <Button>Details</Button>
          </Card>
        )}
      </div>
    </>
  );
}

export default App;
