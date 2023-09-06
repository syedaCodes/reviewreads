const ReviewContainer = ({ selectedBook }) => {
    return (
        <div>
            <div>
                <h4>Books You`ve Read</h4>
            </div>
            <div className="view">
                <div className="view-head">
                    <div className="view-img">
                        <img
                            src={`https://covers.openlibrary.org/b/id/${selectedBook?.cover_i}-M.jpg`}
                            alt={selectedBook?.title}
                        />
                    </div>
                    <div className="view-book-details">
                        <h4>{selectedBook?.title}</h4>
                        <h5>{selectedBook?.author_name}</h5>
                    </div>
                </div>
                <div className="view-body">
                    <div className=""></div>
                </div>
            </div>
        </div>
    );
};

export default ReviewContainer;
