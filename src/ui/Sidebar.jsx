import SidebarItem from "./SidebarItem";

const Sidebar = ({ data, onSelectBook }) => {
    return (
        <aside>
            <div className="booksList">
                <ul>
                    {data?.map((book) => (
                        <SidebarItem
                            book={book}
                            key={book.key}
                            onSelectBook={onSelectBook}
                        />
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
