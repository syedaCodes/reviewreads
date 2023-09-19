import { useState } from "react";
import ViewBook from "./BookView/ViewBook";
import ReviewTabs from "./ReviewTabs";
import Button from "./Button";
import ReviewSections from "./ReviewSections";
import ReviewedBook from "./ReviewedBook";

const ReviewContainer = ({ selectedBook, tabActive, onTabSwitch }) => {
    const [booksReviewed, setBooksReviewed] = useState([]);

    const findBook = (book) => {
        const bookFound = booksReviewed.find(
            (item) => item.isbn.at(0) === book.isbn.at(0)
        );
        return bookFound;
    };

    const handleAddToList = (addBook) => {
        const bookFound = findBook(addBook);

        if (!booksReviewed.length > 0 || !bookFound) {
            setBooksReviewed((booksReviewed) => [...booksReviewed, addBook]);
        }
    };

    const handleTabs = (tab) => onTabSwitch(tab);

    return (
        <div className="review-container">
            <ReviewTabs>
                <Button
                    nameClass={tabActive === 0}
                    handleClick={() => handleTabs(0)}
                >
                    Book view
                </Button>
                <Button
                    nameClass={tabActive === 1}
                    handleClick={() => handleTabs(1)}
                >
                    Books Reviewed
                </Button>
            </ReviewTabs>

            <ReviewSections>
                {tabActive === 0 && Object.keys(selectedBook).length > 0 ? (
                    <ViewBook
                        selectedBook={selectedBook}
                        onAddToList={handleAddToList}
                    />
                ) : null}

                {tabActive === 1 ? (
                    <ReviewedBook
                        booksReviewed={booksReviewed.length && booksReviewed}
                    />
                ) : null}
            </ReviewSections>
        </div>
    );
};

export default ReviewContainer;
