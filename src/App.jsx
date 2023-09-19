import { useState } from "react";
import Dashboard from "./ui/Dashboard";
import Header from "./ui/Header";
import { getBooks } from "./services/api";
import Search from "./features/Search";
import ResultsCount from "./ui/ResultsCount";

const App = () => {
    const [booksData, setBooksData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const clearData = () => {
        setBooksData([]);
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

    return (
        <div>
            <Header>
                <Search handleSubmit={handleSubmit} />
                <ResultsCount results={booksData?.length} />
            </Header>
            <Dashboard
                isLoading={isLoading}
                error={error}
                booksData={booksData}
            />
        </div>
    );
};

export default App;
