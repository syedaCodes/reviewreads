import Button from "../Button";
import ReviewStars from "../../features/StarRatings";

const ViewBookFooter = () => {
    const addToList = () => {
        //get book id and add it to review list
    };

    return (
        <div className="view-footer">
            <ReviewStars />
            <Button nameClass={"btn-primary"} handleClick={addToList}>
                Add to list
            </Button>
        </div>
    );
};

export default ViewBookFooter;
