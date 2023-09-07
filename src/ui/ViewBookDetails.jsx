const ViewBookDetails = ({ title, author, publishDate, language }) => {
    return (
        <div className="view-book-details">
            <h4>{title}</h4>
            {author && <h5>by {Array.isArray(author) ? author[0] : author}</h5>}
            <div className="details-meta">
                {publishDate && (
                    <p>
                        📆 Published on{" "}
                        {Array.isArray(publishDate)
                            ? publishDate[0]
                            : publishDate}
                    </p>
                )}

                {language && (
                    <p>
                        🌐 Language:{" "}
                        <span>
                            {!Array.isArray(language) ? language : language[0]}
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default ViewBookDetails;
