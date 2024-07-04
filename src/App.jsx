// import reactLogo from "./assets/react.svg";
// import fantasy from "./assets/fantasy.jpg";
// import { BooksDB } from "./BooksDB";
// import { useState } from "react";
import { Button } from "reactstrap";
import "./App.css";
import pirin from "./assets/Pirin.jpg";
import BookForm from "./BookForm";
import SearchDisplay from "./SearchDisplay";
import Counter from "./Counter";


function App() {
  return (
    <>
      <h1>The BAW Book List</h1>
      <div>
        <a href="https://www.imdb.com/title/tt0115685/" target="_blank">
          <img src={pirin} className="logo" alt="Pirin Tablet" />
        </a>
      </div>
      <h2>Great Stories are Medicine</h2>
      <Counter />

      <div>
        <BookForm />
      </div>

      <div>
        <h2>Search Books By:</h2>
        <Button color="success">Author</Button>
        <Button>Likes</Button>
        <Button>Awards</Button>
        <Button>See All</Button>
      </div>
      <SearchDisplay />
    </>
  );
}

export default App;
