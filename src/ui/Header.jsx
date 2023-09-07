import Search from "../features/Search";

const Header = ({ onSearch, results, handleSubmit }) => {
    return (
        <header className="row-flex-center">
            <h3>📚 Review Reads</h3>

            <Search onSearch={onSearch} handleSubmit={handleSubmit} />

            <div className="total-results">
                Found <strong>{results}</strong> results
            </div>
        </header>
    );
};

export default Header;
