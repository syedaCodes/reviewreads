const Header = ({ children }) => {
    return (
        <header className="row-flex-center">
            <h3>📚 Review Reads</h3>
            {children}
        </header>
    );
};

export default Header;
