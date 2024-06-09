import BOOKLIST from './BookList';

const BookDetail = ({match}) => {
    const book = BOOKLIST.find(book => book.id === match.params.id);
    return (
        <div>
        <h1>{book.name}</h1>
        <p>{book.author}</p>
        </div>
    );
    };

export default BookDetail;