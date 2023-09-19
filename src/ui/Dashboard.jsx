import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ReviewContainer from "./ReviewContainer";
import Loader from "./LoaderText";
import ErrorMessage from "./ErrorMessage";

const Dashboard = ({ isLoading, error, booksData }) => {
    const [bookSelected, setBookSelected] = useState({});
    const [isActiveTab, setIsActiveTab] = useState(0);

    useEffect(() => {
        return () => {
            setBookSelected({});
        };
    }, []);

    const handleTab = (tabSelected) => {
        setIsActiveTab((isActiveTab) =>
            isActiveTab === tabSelected ? isActiveTab : tabSelected
        );
    };

    const handleSelectedBook = (key) => {
        handleTab(0);
        setBookSelected(() =>
            booksData.find((book) => book.isbn.at(0) === key)
        );
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
                                  tabActive={isActiveTab}
                                  onTabSwitch={handleTab}
                                  selectedBook={bookSelected}
                              />
                          ) : null}
                      </>
                  )
                : !error && <Loader>Loading...</Loader>}
            {error && <ErrorMessage message={error} />}
        </main>
    );
};

export default Dashboard;
