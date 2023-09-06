import { useState } from "react";
import Dashboard from "./ui/Dashboard";
import Header from "./ui/Header";

const App = () => {
    const [booksData, setBooksData] = useState([]);
    // const [selectedBookId, setSelectedBookId] = useState(null);
    const [bookSelected, setBookSelected] = useState({});

    const handleSearch = (data) => {
        setBooksData(data);
    };

    const handleSelectedBook = (key) => {
        // setSelectedBookId((selectedBookId) =>
        //     key === selectedBookId ? null : key
        // );

        setBookSelected(() => booksData?.find((book) => book.key === key));
    };

    return (
        <div>
            <Header onSearch={handleSearch} results={booksData?.length} />
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
