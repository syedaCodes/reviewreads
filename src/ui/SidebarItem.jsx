import ItemDetails from "./ItemDetails";

const SidebarItem = ({ book, onSelectBook }) => {
    return (
        <li onClick={() => onSelectBook(book.key)}>
            <div className="book-cover">
                <img
                    src={`https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg`}
                    alt={book?.title}
                />
            </div>
            <ItemDetails
                title={book?.title}
                author={book?.author_name}
                publishDate={book?.publish_date}
                language={book?.language}
            />
        </li>
    );
};

export default SidebarItem;
