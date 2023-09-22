import { useEffect } from "react";
import StarRatings from "../../features/StarRatings";
import Button from "../Button";
import ViewBookDetails from "./ViewBookDetails";
import ViewBookFooter from "./ViewBookFooter";

const ViewBook = ({
    selectedBook,
    onAddToList,
    onSetUserRating,
    userRating,
    isRated,
}) => {
    useEffect(() => {
        if (!selectedBook.title) return;
        document.title = `Book | ${selectedBook?.title}`;

        return () => {
            document.title = "Review Reads";
        };
    }, [selectedBook]);

    const handleUserRating = (rated) => {
        onSetUserRating(rated);
    };
    const addBookToReviewed = () => {
        onAddToList(selectedBook);
    };
    return (
        <>
            <div className="view-head">
                <div className="view-img">
                    <img
                        src={`https://covers.openlibrary.org/b/id/${selectedBook?.cover}-M.jpg`}
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
                {!isRated ? (
                    <>
                        <StarRatings
                            key={selectedBook.isbn}
                            onSetRating={handleUserRating}
                        />
                        {userRating > 0 && (
                            <Button
                                nameClass={"btn-primary"}
                                handleClick={addBookToReviewed}
                            >
                                Add to list
                            </Button>
                        )}
                    </>
                ) : (
                    <p>You have rated this book</p>
                )}
            </ViewBookFooter>
        </>
    );
};

export default ViewBook;
