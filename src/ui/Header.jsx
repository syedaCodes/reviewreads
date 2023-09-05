import Search from "../features/Search";

const Header = () => {
    return (
        <header className="row-flex-center">
            <h3>📚 Review Reads</h3>

            <Search />

            <div className="total-results">Found 88 results</div>
        </header>
    );
};

export default Header;
