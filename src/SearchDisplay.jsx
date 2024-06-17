import { Container } from "reactstrap";
import BookCardShort from "./BookCardShort";

const SearchDisplay = () => {
    return (
        // this will get a switch statement, displaying the bookcards for each search or filter type. 
        <Container
            className="cardDeck"
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                border: "1px solid red",
                borderRadius: "10px",
                backgroundColor: "darkgray",
                opacity: "0.8",
                padding: "20px", 
                margin: "20px"
            }} 
        >
            <BookCardShort />
        </Container>
    )
}

export default SearchDisplay;