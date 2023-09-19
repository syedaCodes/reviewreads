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
        const bookFound = booksReviewed.find(
            (item) => item.isbn === book.isbn.at(0)
        );
        return bookFound;
    };

    const isRated = findBook(selectedBook);

    const handleAddToList = ({
        title,
        isbn,
        ratings_average,
        cover_i,
        publish_date,
    }) => {
        const readBook = {
            title,
            isbn: isbn.at(0),
            avg_rating: ratings_average?.toFixed(2),
            cover: cover_i,
            rated: userRating,
            published: new Date(publish_date.at(0)).getFullYear(),
        };

        //check if the book exists in the already rated books
        const bookFound = findBook(readBook);

        //if the rated list is empty or if the book is not rated
        if (!booksReviewed.length > 0 || !bookFound) {
            console.log(bookFound);
            setBooksReviewed((booksReviewed) => [...booksReviewed, readBook]);
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
