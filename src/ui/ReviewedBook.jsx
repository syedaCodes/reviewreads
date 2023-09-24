const ReviewedBook = ({ booksReviewed }) => {
    const enableScroll = {
        overflowY: "scroll",
    };

    return (
        <>
            {booksReviewed?.length > 0 ? (
                <ul
                    className="book-reviews"
                    style={booksReviewed.length > 4 ? enableScroll : null}
                >
                    {booksReviewed?.map((book) => (
                        <li key={book?.isbn}>
                            <div className="book-cover">
                                <img
                                    src={`https://covers.openlibrary.org/b/id/${book?.cover}-S.jpg`}
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
                        </li>
                    ))}
                </ul>
            ) : null}
        </>
    );
};

export default ReviewedBook;
