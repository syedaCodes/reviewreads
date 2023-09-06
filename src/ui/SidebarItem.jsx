import ItemDetails from "./ItemDetails";

const SidebarItem = ({ book }) => {
    return (
        <li>
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
