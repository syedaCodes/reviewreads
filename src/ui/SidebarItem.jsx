import ItemDetails from "./ItemDetails";

const SidebarItem = ({ book, onSelectBook }) => {
    return (
        <li onClick={() => onSelectBook(book.isbn)}>
            <div className="book-cover">
                <img
                    src={`https://covers.openlibrary.org/b/id/${book?.cover}-M.jpg`}
                    alt={book?.title}
                />
            </div>
            <ItemDetails
                key={`${book.key}-details`}
                title={book?.title}
                author={book?.author_name}
                publishDate={book?.published}
                language={book?.language}
            />
        </li>
    );
};

export default SidebarItem;
