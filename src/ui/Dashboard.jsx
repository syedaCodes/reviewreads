import { useState } from "react";
import Sidebar from "./Sidebar";
import ReviewContainer from "./ReviewContainer";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Button from "./Button";

const Dashboard = ({ isLoading, error, booksData }) => {
    const [booksReviewed, setBooksReviewed] = useState([]);
    const [bookSelected, setBookSelected] = useState({});
    const [isActiveTab, setIsActiveTab] = useState(0);

    const handleTab = (tabSelected) => {
        setIsActiveTab((isActiveTab) =>
            isActiveTab === tabSelected ? isActiveTab : tabSelected
        );
    };

    const handleSelectedBook = (key) => {
        handleTab(0);
        setBookSelected(() => booksData.find((book) => book.isbn === key));
    };

    const handleReviewedList = (book) => {
        setBooksReviewed((booksReviewed) => [...booksReviewed, book]);
    };

    return (
        <main>
            {!isLoading && !error
                ? booksData.length > 0 && (
                      <>
                          <Sidebar
                              data={booksData}
                              onSelectBook={handleSelectedBook}
                          />
                          {Object.keys(bookSelected).length > 0 ? (
                              <ReviewContainer
                                  activeTab={isActiveTab}
                                  selectedBook={bookSelected}
                                  booksReviewed={booksReviewed}
                                  onHandleList={handleReviewedList}
                              >
                                  <Button
                                      nameClass={isActiveTab === 0}
                                      handleClick={() => setIsActiveTab(0)}
                                  >
                                      Book view
                                  </Button>
                                  <Button
                                      nameClass={isActiveTab === 1}
                                      handleClick={() => setIsActiveTab(1)}
                                  >
                                      Books Reviewed
                                  </Button>
                              </ReviewContainer>
                          ) : null}
                      </>
                  )
                : !error && <Loader>Loading...</Loader>}
            {error && <ErrorMessage message={error} />}
        </main>
    );
};

export default Dashboard;
