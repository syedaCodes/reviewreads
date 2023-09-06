import ReviewContainer from "./ReviewContainer";
import Sidebar from "./Sidebar";

const Dashboard = ({ data, onSelectBook, selectedBook }) => {
    return (
        <>
            <Sidebar data={data} onSelectBook={onSelectBook} />
            <ReviewContainer selectedBook={selectedBook} />
        </>
    );
};

export default Dashboard;
