import { useState } from "react";
import ViewBook from "./BookView/ViewBook";
import ReviewTabs from "./ReviewTabs";
import Button from "./Button";
import ReviewSections from "./ReviewSections";
import ReviewedBook from "./ReviewedBook";

const ReviewContainer = ({ selectedBook, tabActive, onTabSwitch }) => {
    const [booksReviewed, setBooksReviewed] = useState([]);
    const [userRating, setUserRating] = useState("");

    const findBook = (book) => {
        const bookFound = booksReviewed.find((item) => item.isbn === book.isbn);
        return bookFound;
    };

    const isRated = findBook(selectedBook);

    const handleAddToList = (book) => {
        book.rated = userRating;

        //check if the book exists in the already rated books
        const bookFound = findBook(book);

        //if the rated list is empty or if the book is not rated
        if (!booksReviewed.length > 0 || !bookFound) {
            setBooksReviewed((booksReviewed) => [...booksReviewed, book]);
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
                        isRated={isRated}
                        userRating={userRating}
                        onSetUserRating={setUserRating}
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
