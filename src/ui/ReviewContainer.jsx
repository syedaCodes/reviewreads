import ViewBook from "./BookView/ViewBook";
import ReviewTabs from "./ReviewTabs";
import ReviewedBook from "./ReviewedBook";
import { findItem } from "../utils/findItem";

const ReviewContainer = ({
    activeTab,
    selectedBook,
    booksReviewed,
    onHandleList,
    onCrossBook,
    children,
}) => {
    const handleAddToList = (book) => {
        //check if the book exists in the already rated books
        const bookFound = findItem(booksReviewed, book);

        //if the rated list is empty or if the book is not rated
        if (!booksReviewed?.length > 0 || !bookFound) {
            onHandleList(book);
        }
    };

    return (
        <div className="review-container">
            <ReviewTabs>{children}</ReviewTabs>

            <div className="view">
                {activeTab === 0 && Object.keys(selectedBook).length > 0 && (
                    <ViewBook
                        selectedBook={selectedBook}
                        onAddToList={handleAddToList}
                    />
                )}

                {activeTab === 1 && (
                    <ReviewedBook
                        booksReviewed={booksReviewed?.length && booksReviewed}
                        onCrossBook={onCrossBook}
                    />
                )}
            </div>
        </div>
    );
};

export default ReviewContainer;
