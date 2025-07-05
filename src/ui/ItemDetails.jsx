const ItemDetails = ({ title, author, publishDate, language }) => {
  return (
    <div className="book-details">
      <div className="book-details-head">
        <h4>{title}</h4>
        {author && <p>by {Array.isArray(author) ? author[0] : author}</p>}
      </div>

      <div className="book-details-footer">
        {publishDate && (
          <p>
            Published: <span>{!Array.isArray(publishDate) ? publishDate : publishDate[0]}</span>
          </p>
        )}
        {language && (
          <p>
            Language: <span>{!Array.isArray(language) ? language : language[0]}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
