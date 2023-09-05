import ReviewContainer from "./ReviewContainer";
import Sidebar from "./Sidebar";

const Dashboard = ({ data }) => {
    return (
        <>
            <Sidebar data={data} />
            <ReviewContainer />
        </>
    );
};

export default Dashboard;
