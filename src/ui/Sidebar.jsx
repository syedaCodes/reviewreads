import SidebarItem from "./SidebarItem";

const Sidebar = ({ data, onSelectBook }) => {
    const enableScroll = {
        overflowY: "scroll",
    };

    return (
        <aside>
            <div
                className="booksList"
                style={data?.length > 3 ? enableScroll : null}
            >
                {data.length > 0 ? (
                    <ul>
                        {data?.map((book, index) => (
                            <SidebarItem
                                key={`${book.isbn}-${index}`}
                                book={book}
                                onSelectBook={onSelectBook}
                            />
                        ))}
                    </ul>
                ) : (
                    <p>Search for a book</p>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
