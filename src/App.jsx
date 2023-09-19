import { useState } from "react";
import Dashboard from "./ui/Dashboard";
import Header from "./ui/Header";
import { getBooks } from "./services/api";
import Sidebar from "./ui/Sidebar";
import ReviewContainer from "./ui/ReviewContainer";
import Search from "./features/Search";
import ResultsCount from "./ui/ResultsCount";
import Loader from "./ui/LoaderText";
import ErrorMessage from "./ui/ErrorMessage";

const App = () => {
    const [booksData, setBooksData] = useState([]);
    const [bookSelected, setBookSelected] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isActiveTab, setIsActiveTab] = useState(0);
    const [error, setError] = useState("");

    const clearData = () => {
        setBooksData([]);
        setBookSelected({});
        setError("");
    };

    const handleSubmit = async (search) => {
        clearData();
        const query = search.replace(" ", "+");

        if (search) {
            setIsLoading(true);
        } else {
            setError("Please enter a valid book name");
            return;
        }

        const res = await getBooks(query);

        if (!res.docs || res.error) {
            setError(res.error);
        }

        if (res.docs.length > 0) {
            setBooksData((data) => {
                const filtered = res.docs.filter((book) => book.isbn);
                return [...data, ...filtered];
            });
        }
        setIsLoading(false);
    };

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
        <div>
            <Header>
                <Search handleSubmit={handleSubmit} />
                <ResultsCount results={booksData?.length} />
            </Header>
            <Dashboard>
                {!isLoading && !error
                    ? booksData.length > 0 && (
                          <>
                              <Sidebar
                                  data={booksData}
                                  onSelectBook={handleSelectedBook}
                              />
                              {console.log(booksData)}
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
            </Dashboard>
        </div>
    );
};

export default App;
