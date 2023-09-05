import { useState } from "react";
import { getBooks } from "../services/api";

const Search = ({ onSearch }) => {
    //create local state first - lift state up when needed
    const [search, setSearch] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const query = search.replace(" ", "+");
        const data = await getBooks(query);
        if (!data) return;
        onSearch(data);
        console.log(data);
    };

    return (
        <form className="search-component" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search by Book Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn">🔍</button>
        </form>
    );
};

export default Search;
