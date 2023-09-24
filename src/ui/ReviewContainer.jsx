import ViewBook from "./BookView/ViewBook";
import ReviewTabs from "./ReviewTabs";
import ReviewSections from "./ReviewSections";
import ReviewedBook from "./ReviewedBook";

const ReviewContainer = ({
    activeTab,
    selectedBook,
    booksReviewed,
    onHandleList,
    children,
}) => {
    const findBook = (book) => {
        const bookFound = booksReviewed.find((item) => item.isbn === book.isbn);
        return bookFound;
    };

    const handleAddToList = (book) => {
        //check if the book exists in the already rated books
        const bookFound = findBook(book);

        //if the rated list is empty or if the book is not rated
        if (!booksReviewed.length > 0 || !bookFound) {
            onHandleList(book);
        }
    };

    return (
        <div className="review-container">
            <ReviewTabs>{children}</ReviewTabs>

            <ReviewSections>
                {activeTab === 0 && Object.keys(selectedBook).length > 0 && (
                    <ViewBook
                        selectedBook={selectedBook}
                        onAddToList={handleAddToList}
                    />
                )}

                {activeTab === 1 && (
                    <ReviewedBook
                        booksReviewed={booksReviewed.length && booksReviewed}
                    />
                )}
            </ReviewSections>
        </div>
    );
};

export default ReviewContainer;
