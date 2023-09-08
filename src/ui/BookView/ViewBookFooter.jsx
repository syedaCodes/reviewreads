import Button from "../Button";
import ReviewStars from "../../features/StarRatings";

const ViewBookFooter = () => {
    return (
        <div className="view-footer">
            <Button nameClass={"btn-primary"}>Add to list</Button>
            <ReviewStars />
        </div>
    );
};

export default ViewBookFooter;
