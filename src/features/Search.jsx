import { useState } from "react";

const Search = ({ handleSubmit }) => {
    //create local state first - lift state up when needed
    const [search, setSearch] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(search);
    };

    return (
        <form className="search-component" onSubmit={onFormSubmit}>
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
