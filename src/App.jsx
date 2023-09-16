import { useState } from "react";
import Dashboard from "./ui/Dashboard";
import Header from "./ui/Header";
import { getBooks } from "./services/api";
import Sidebar from "./ui/Sidebar";
import ReviewContainer from "./ui/ReviewContainer";
import Search from "./features/Search";
import ResultsCount from "./ui/ResultsCount";
import LoaderText from "./ui/LoaderText";
import ErrorMessage from "./ui/ErrorMessage";

const App = () => {
    const [booksData, setBooksData] = useState([]);
    const [bookSelected, setBookSelected] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const cleanData = () => {
        setBooksData([]);
        setBookSelected({});
        setError("");
    };

    const handleSubmit = async (search) => {
        cleanData();
        const query = search.replace(" ", "+");
        const res = await getBooks(query);
        setIsLoading(true);

        if (!res.docs || res.error) {
            setError(res.error);
        }

        if (res.docs) {
            setBooksData((data) => [...res.docs, data]);
        }

        setIsLoading(false);
    };

    const handleSelectedBook = (key) => {
        setBookSelected(() => booksData?.find((book) => book.key === key));
    };

    return (
        <div>
            <Header>
                <Search handleSubmit={handleSubmit} />
                <ResultsCount results={booksData?.length} />
            </Header>
            <Dashboard>
                {!isLoading && booksData.length > 0 && !error && (
                    <>
                        <Sidebar
                            data={booksData}
                            onSelectBook={handleSelectedBook}
                        />
                        {Object.keys(bookSelected).length > 0 && (
                            <ReviewContainer selectedBook={bookSelected} />
                        )}
                    </>
                )}

                {isLoading && !error && <LoaderText>Loading...</LoaderText>}

                {error ? <ErrorMessage>{error}</ErrorMessage> : null}
            </Dashboard>
        </div>
    );
};

export default App;
