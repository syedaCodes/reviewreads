import Button from "./Button";
import ReviewStars from "./ReviewStars";

const ViewBookFooter = () => {
    return (
        <div className="view-footer">
            <ReviewStars />
            <Button nameClass={"btn-primary"}>Add to list</Button>
        </div>
    );
};

export default ViewBookFooter;
