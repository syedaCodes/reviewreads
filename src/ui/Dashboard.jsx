import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ReviewContainer from "./ReviewContainer";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Button from "./Button";
import { findItem } from "../utils/findItem";

const Dashboard = ({ isLoading, error, booksData }) => {
    const [booksReviewed, setBooksReviewed] = useState(function () {
        const books = localStorage.getItem("booksReviewed");
        const fromStorage = JSON.parse(books);
        return fromStorage ? fromStorage : [];
    });

    const [bookSelected, setBookSelected] = useState({});
    const [isActiveTab, setIsActiveTab] = useState(
        booksReviewed?.length ? 1 : 0
    );

    useEffect(() => {
        if (booksReviewed)
            localStorage.setItem(
                "booksReviewed",
                JSON.stringify(booksReviewed)
            );
    }, [booksReviewed]);

    const handleTab = (tabSelected) => {
        setIsActiveTab((isActiveTab) =>
            isActiveTab === tabSelected ? isActiveTab : tabSelected
        );
    };

    const handleSelectedBook = (selected) => {
        handleTab(0);
        const checkBookReviewed = findItem(booksReviewed, selected);
        checkBookReviewed
            ? setBookSelected(checkBookReviewed)
            : setBookSelected(selected);
    };

    const handleReviewedList = (book) => {
        setBooksReviewed((booksReviewed) => [...booksReviewed, book]);
    };

    return (
        <main>
            {!isLoading && !error ? (
                <>
                    {/* {booksData.length > 0 && ( */}
                    <Sidebar
                        data={booksData}
                        onSelectBook={handleSelectedBook}
                    />
                    {/* )} */}
                    {Object.keys(bookSelected)?.length > 0 ||
                    booksReviewed?.length > 0 ? (
                        <ReviewContainer
                            activeTab={isActiveTab}
                            selectedBook={bookSelected}
                            booksReviewed={booksReviewed}
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
