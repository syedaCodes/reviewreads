import Loader from "./Loader";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ data, onSelectBook }) => {
    return (
        <aside>
            {console.log(data)}
            <div className="booksList">
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
                    <Loader>Just a minute..</Loader>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
