import { useState } from "react";

const StarRatings = ({ maxRating = 5 }) => {
    const [rating, setRating] = useState(0);

    const getRatingQuote = new Map([
        [1, "Awful"],
        [2, "Not Good"],
        [3, "Good"],
        [4, "Impressive"],
        [5, "Masterpiece"],
    ]);

    const handleClick = (rating) => {
        setRating(rating);
    };

    return (
        <div className="review-stars">
            <div className="stars">
                {Array.from({ length: maxRating }, (_, i) => (
                    <span
                        className={rating >= maxRating - i ? "active" : ""}
                        key={i}
                        onClick={() => handleClick(maxRating - i)}
                    >
                        &#9733;
                    </span>
                ))}
            </div>
            {rating ? <p>{`"${getRatingQuote.get(rating)}"`}</p> : ""}
        </div>
    );
};

export default StarRatings;
