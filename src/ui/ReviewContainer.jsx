import ViewBook from "./BookView/ViewBook";
import ReviewTabs from "./ReviewTabs";
import ReviewedBook from "./ReviewedBook";

const ReviewContainer = ({
    activeTab,
    selectedBook,
    booksReviewed,
    onHandleList,
    onDeleteBook,
    children,
}) => {
    return (
        <div className="review-container">
            <ReviewTabs>{children}</ReviewTabs>

            <div
                className={`view ${activeTab === 1 ? " reviewed-books" : null}`}
            >
                {activeTab === 0 && Object.keys(selectedBook).length > 0 && (
                    <ViewBook
                        selectedBook={selectedBook}
                        onAddToList={() => onHandleList(selectedBook)}
                    />
                )}

                {activeTab === 1 && (
                    <ReviewedBook
                        booksReviewed={booksReviewed?.length && booksReviewed}
                        onDeleteBook={onDeleteBook}
                    />
                )}
            </div>
        </div>
    );
};

export default ReviewContainer;
