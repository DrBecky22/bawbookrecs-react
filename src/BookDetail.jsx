import BOOKLIST from './BookList';

const BookDetail = ({match}) => {
    const book = BOOKLIST.find(book => book.id === match.params.id);
    return (
        <div>
        <h1>{book.name}</h1>
        <p>{book.author}</p>
        <p>{book.genres}</p>
        <p>{book.likes}</p>
        <p>overall rating</p>
        <p>smut meter</p>
        <p>doom meter</p>
        <p>comments</p>
        </div>
    );
    };

export default BookDetail;