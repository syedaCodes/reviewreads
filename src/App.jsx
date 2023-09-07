import { useState } from "react";
import Dashboard from "./ui/Dashboard";
import Header from "./ui/Header";
import { getBooks } from "./services/api";

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
            <Header handleSubmit={handleSubmit} results={booksData?.length} />
            <main>
                {booksData?.length ? (
                    <Dashboard
                        data={booksData}
                        onSelectBook={handleSelectedBook}
                        selectedBook={bookSelected}
                    />
                ) : null}
            </main>
        </div>
    );
};

export default App;
