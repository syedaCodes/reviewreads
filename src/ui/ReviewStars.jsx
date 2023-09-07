import Button from "./Button";

const ReviewStars = () => {
    return (
        <div className="review-stars">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>

            <Button nameClass={"btn-primary"}>Add to list</Button>
        </div>
    );
};

export default ReviewStars;
