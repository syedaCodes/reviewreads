import { useState } from "react";
import Dashboard from "./ui/Dashboard";
import Header from "./ui/Header";

const App = () => {
    const [booksData, setBooksData] = useState([]);

    const handleSearch = (data) => {
        setBooksData(data);
    };

    return (
        <div>
            <Header onSearch={handleSearch} results={booksData?.length} />
            <main>
                {booksData?.length ? <Dashboard data={booksData} /> : null}
            </main>
        </div>
    );
};

export default App;
