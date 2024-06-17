import { BooksDB } from "./BooksDB";
import { Card, Button } from "reactstrap";

export default function BookCardShort() {
    return (
        <div>
            {BooksDB.map((book) =>
            <Card 
                key={book.id}
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
    )
}