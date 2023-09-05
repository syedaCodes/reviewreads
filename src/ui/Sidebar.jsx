import SidebarItem from "./SidebarItem";

const Sidebar = ({ data }) => {
    return (
        <aside>
            <div className="booksList">
                <ul>
                    {data?.map((book) => (
                        <SidebarItem book={book} key={book.key} />
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;