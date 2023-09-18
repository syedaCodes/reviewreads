import LoaderText from "./Loader";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ data, onSelectBook }) => {
    return (
        <aside>
            <div className="booksList">
                {data.length > 0 ? (
                    <ul>
                        {data?.map((book, index) => (
                            <SidebarItem
                                key={`${book?.key}-${index}`}
                                book={book}
                                onSelectBook={onSelectBook}
                            />
                        ))}
                    </ul>
                ) : (
                    <LoaderText>Just a minute..</LoaderText>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
