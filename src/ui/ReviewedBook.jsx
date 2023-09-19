const ReviewedBook = ({ booksReviewed }) => {
    return (
        <>
            {booksReviewed?.length > 0 ? (
                <ul className="book-reviews">
                    {booksReviewed?.map((book) => (
                        <li key={book?.isbn.at(0)}>
                            <div className="book-cover">
                                <img
                                    src={`https://covers.openlibrary.org/b/id/${book?.cover_i}-S.jpg`}
                                    alt={book?.title}
                                />
                            </div>
                            <div className="book-details">
                                <h5>{book?.title}</h5>
                                <div className="book-meta-details">
                                    <p>
                                        🌟{" "}
                                        {book.ratings_average
                                            ? book?.ratings_average.toFixed(2)
                                            : null}
                                    </p>
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
