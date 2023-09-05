const SidebarItem = ({ book }) => {
    return (
        <li>
            <div className="book-cover">
                <img
                    src={`https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg`}
                    alt={book?.title}
                />
            </div>
            <div className="book-details">
                <div className="book-details-head">
                    <h4>{book?.title}</h4>
                    <p>by {book?.author_name}</p>
                </div>

                <div className="book-details-footer">
                    {book?.publish_date && (
                        <p>
                            Published:{" "}
                            <span>
                                {!Array.isArray(book.publish_date)
                                    ? book?.publish_date
                                    : book?.publish_date[0]}
                            </span>
                        </p>
                    )}
                    {book?.language && (
                        <p>
                            Language:{" "}
                            <span>
                                {!Array.isArray(book.language)
                                    ? book?.language
                                    : book?.language[0]}
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </li>
    );
};

export default SidebarItem;
