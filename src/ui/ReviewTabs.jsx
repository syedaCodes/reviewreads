import Button from "./Button";

const ReviewTabs = ({ onVisit, isVisited }) => {
    return (
        <div className="review-tabs">
            <Button
                nameClass={isVisited ? "btn-primary" : "active btn-primary"}
                handleClick={onVisit}
            >
                Book view
            </Button>
            <Button
                nameClass={!isVisited ? "btn-primary" : "active btn-primary"}
                handleClick={onVisit}
            >
                Books Reviewed
            </Button>
        </div>
    );
};

export default ReviewTabs;
