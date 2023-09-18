const ViewBookDetails = ({ title, author, publishDate, language, ratings }) => {
    return (
        <div className="view-book-details">
            <h4>{title}</h4>
            {author && (
                <h5>by {Array.isArray(author) ? author.at(0) : author}</h5>
            )}
            <div className="details-meta">
                {publishDate && (
                    <p>
                        📆 Published:{" "}
                        {Array.isArray(publishDate)
                            ? publishDate.at(0)
                            : publishDate}
                    </p>
                )}

                {language && (
                    <p>
                        🌐 Language:{" "}
                        <span>
                            {!Array.isArray(language)
                                ? language
                                : language.at(0)}
                        </span>
                    </p>
                )}

                {ratings && (
                    <p>
                        🌟 Ratings:{" "}
                        <span>
                            {!Array.isArray(ratings)
                                ? ratings.toFixed(2)
                                : ratings.at(0)}
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default ViewBookDetails;
