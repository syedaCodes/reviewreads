import { useState } from "react";
import Dashboard from "./ui/Dashboard";
import Header from "./ui/Header";
import { getBooks } from "./services/api";
import Sidebar from "./ui/Sidebar";
import ReviewContainer from "./ui/ReviewContainer";
import Search from "./features/Search";
import ResultsCount from "./ui/ResultsCount";

const App = () => {
    const [booksData, setBooksData] = useState([]);
    const [bookSelected, setBookSelected] = useState({});

    const cleanData = () => {
        setBooksData("");
        setBookSelected({});
    };

    const handleSubmit = async (search) => {
        cleanData();
        const query = search.replace(" ", "+");
        const data = await getBooks(query);
        if (!data) return;
        setBooksData(data);
        console.log(data);
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
            <main>
                {booksData?.length ? (
                    <Dashboard>
                        <Sidebar
                            data={booksData}
                            onSelectBook={handleSelectedBook}
                        />
                        <ReviewContainer selectedBook={bookSelected} />
                    </Dashboard>
                ) : null}
            </main>
        </div>
    );
};

export default App;
