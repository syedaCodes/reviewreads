import { useWindowScrollAxis } from '../hooks/useWindowScrollAxis';
import SidebarItem from './SidebarItem';

const Sidebar = ({ data, onSelectBook }) => {
  const scrollAxis = useWindowScrollAxis(data);

  const enableXScroll = { overflowX: 'scroll' };
  const enableYScroll = { overflowY: 'scroll' };

  return (
    <aside>
      <div
        className="booksList"
        style={
          scrollAxis && data?.length > 3 ? enableXScroll : data.length > 3 ? enableYScroll : null
        }
      >
        <ul>
          {data?.map((book) => (
            <SidebarItem key={`${book?.key}`} book={book} onSelectBook={onSelectBook} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
