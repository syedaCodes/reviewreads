import { useState } from "react";
import Sidebar from "./Sidebar";
import ReviewContainer from "./ReviewContainer";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Button from "./Button";
import { findItem } from "../utils/findItem";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Dashboard = ({ isLoading, error, booksData }) => {
    const [booksReviewed, setBooksReviewed] = useLocalStorage(
        [],
        "booksReviewed"
    );

    const [bookSelected, setBookSelected] = useState({});

    const [isActiveTab, setIsActiveTab] = useState(
        booksReviewed?.length ? 1 : 0
    );

    //switch tabs
    const handleTab = (tabSelected) => {
        setIsActiveTab((isActiveTab) =>
            isActiveTab === tabSelected ? isActiveTab : tabSelected
        );
    };

    const handleSelectedBook = (selected) => {
        //by default let the active tab be book view
        handleTab(0);

        //check if the book exists in the books that have been reviewed already
        const bookFound = findItem(booksReviewed, selected);

        //if book found
        bookFound ? setBookSelected(bookFound) : setBookSelected(selected);
    };

    const handleReviewedList = (book) => {
        const bookFound = findItem(booksReviewed, book);

        //if there are no books reviewed or the specific book is not found
        if (!booksReviewed?.length > 0 || !bookFound) {
            setBooksReviewed((booksReviewed) =>
                book.rated ? [...booksReviewed, book] : booksReviewed
            );
        }
    };

    const onDeleteBook = (book) => {
        //remove a book to the reviewed list
        setBooksReviewed((booksReviewed) =>
            booksReviewed.filter(
                (bookReviewed) => bookReviewed.isbn !== book.isbn
            )
        );
    };

    return (
        <main>
            {!isLoading && !error ? (
                <>
                    <Sidebar
                        data={booksData}
                        onSelectBook={handleSelectedBook}
                    />

                    {Object.keys(bookSelected)?.length > 0 ||
                    booksReviewed?.length > 0 ? (
                        <ReviewContainer
                            activeTab={isActiveTab}
                            selectedBook={bookSelected}
                            booksReviewed={booksReviewed}
                            onDeleteBook={onDeleteBook}
                            onHandleList={handleReviewedList}
                        >
                            {Object.keys(bookSelected).length > 0 && (
                                <Button
                                    nameClass={isActiveTab === 0}
                                    handleClick={() => setIsActiveTab(0)}
                                >
                                    Book view
                                </Button>
                            )}
                            <Button
                                nameClass={isActiveTab === 1}
                                handleClick={() => setIsActiveTab(1)}
                            >
                                Books Reviewed
                            </Button>
                        </ReviewContainer>
                    ) : null}
                </>
            ) : (
                !error && <Loader>Loading...</Loader>
            )}
            {error && <ErrorMessage message={error} />}
        </main>
    );
};

export default Dashboard;
