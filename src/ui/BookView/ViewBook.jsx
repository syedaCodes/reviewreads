import { useEffect, useState } from "react";
import StarRatings from "../../features/StarRatings";
import Button from "../Button";
import ViewBookDetails from "./ViewBookDetails";
import ViewBookFooter from "./ViewBookFooter";

const ViewBook = ({ selectedBook, onAddToList }) => {
    const [userRating, setUserRating] = useState("");

    useEffect(() => {
        if (!selectedBook.title) return;
        document.title = `Book | ${selectedBook?.title}`;

        return () => {
            document.title = "Review Reads";
            setUserRating("");
        };
    }, [selectedBook]);

    const handleUserRating = (rated) => {
        setUserRating(rated);
    };

    const addBookToReviewed = () => {
        selectedBook.rated = userRating;
        if (userRating > 0) {
            onAddToList(selectedBook);
        }
    };

    return (
        <>
            <div className="view-head">
                <div className="view-img">
                    <img
                        src={`${
                            selectedBook.cover
                                ? `https://covers.openlibrary.org/b/id/${selectedBook?.cover}-M.jpg`
                                : "https://placehold.jp/180x276.png"
                        }`}
                        alt={selectedBook?.title}
                    />
                </div>
                <ViewBookDetails
                    author={selectedBook?.author_name}
                    publishDate={selectedBook?.published}
                    language={selectedBook?.language}
                    title={selectedBook?.title}
                    ratings={selectedBook?.avg_rating}
                />
            </div>
            <div className="view-body">
                {selectedBook.first_sentence ? (
                    <>
                        <h4>Opening line:</h4>
                        <p>{selectedBook?.first_sentence}</p>
                    </>
                ) : null}
            </div>
            <ViewBookFooter>
                {!selectedBook.rated ? (
                    <>
                        <StarRatings
                            key={selectedBook.isbn}
                            onSetRating={handleUserRating}
                        />
                        {userRating > 0 && (
                            <Button handleClick={addBookToReviewed}>
                                Add to list
                            </Button>
                        )}
                    </>
                ) : (
                    selectedBook.rated && <p>You have rated this book</p>
                )}
            </ViewBookFooter>
        </>
    );
};

export default ViewBook;
