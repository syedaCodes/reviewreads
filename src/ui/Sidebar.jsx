import Loader from "./LoaderText";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ data, onSelectBook }) => {
    return (
        <aside>
            <div className="booksList">
                {data.length > 0 ? (
                    <ul>
                        {data?.map((book) => (
                            <>
                                <SidebarItem
                                    key={book.isbn.at(0)}
                                    book={book}
                                    onSelectBook={onSelectBook}
                                />
                            </>
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
