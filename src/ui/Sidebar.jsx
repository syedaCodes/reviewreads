import LoaderText from "./LoaderText";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ data, onSelectBook }) => {
    return (
        <aside>
            <div className="booksList">
                {data.length > 0 ? (
                    <ul>
                        {data?.map((book) => (
                            <SidebarItem
                                book={book}
                                key={book.key}
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
