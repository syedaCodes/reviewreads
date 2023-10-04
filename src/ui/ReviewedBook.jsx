import { useWindowScrollAxis } from "../hooks/useWindowScrollAxis";

const ReviewedBook = ({ booksReviewed, onCrossBook }) => {
    const scrollAxis = useWindowScrollAxis(booksReviewed);

    const enableScroll = {
        overflowY: "scroll",
    };

    return (
        <>
            {booksReviewed?.length > 0 ? (
                <ul
                    className="book-reviews"
                    style={
                        !scrollAxis && booksReviewed.length > 5
                            ? enableScroll
                            : null
                    }
                >
                    {booksReviewed?.map((book) => (
                        <li key={book?.isbn}>
                            <div className="book-cover">
                                <img
                                    src={`${
                                        book?.cover
                                            ? `https://covers.openlibrary.org/b/id/${book?.cover}-S.jpg`
                                            : "https://placehold.jp/37x58.png"
                                    }`}
                                    alt={book?.title}
                                />
                            </div>
                            <div className="book-details">
                                <h5>{book?.title}</h5>
                                <div className="book-meta-details">
                                    {book.avg_rating && (
                                        <p>🌟 {book?.avg_rating}</p>
                                    )}
                                    <p>⭐ {book?.rated}</p>
                                    <p>📆 {book?.published}</p>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => onCrossBook(book)}
                                >
                                    ❌
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : null}
        </>
    );
};

export default ReviewedBook;
