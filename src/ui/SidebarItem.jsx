import ItemDetails from "./ItemDetails";

const SidebarItem = ({ book, onSelectBook }) => {
    return (
        <li onClick={() => onSelectBook(book.isbn.at(0))}>
            <div className="book-cover">
                <img
                    src={`https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg`}
                    alt={book?.title}
                />
            </div>
            <ItemDetails
                key={`${book.key}-details`}
                title={book?.title}
                author={book?.author_name}
                publishDate={book?.publish_date}
                language={book?.language}
            />
        </li>
    );
};

export default SidebarItem;
