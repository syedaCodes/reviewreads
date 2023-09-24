import { useEffect, useRef, useState } from "react";

const Search = ({ handleSubmit }) => {
    const inputSearch = useRef(null);

    //create local state first - lift state up when needed
    const [search, setSearch] = useState("");

    useEffect(() => {
        const callback = (e) => {
            if (document.activeElement === inputSearch.current) return;
            if (e.code === "Enter") {
                inputSearch.current.focus();
                setSearch("");
            }
        };

        document.addEventListener("keydown", callback);

        return () => document.removeEventListener("keydown", callback);
    }, [setSearch]);

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
                ref={inputSearch}
            />
            <button className="btn">🔍</button>
        </form>
    );
};

export default Search;
