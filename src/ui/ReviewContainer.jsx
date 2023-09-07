import { useState } from "react";
import ViewBooks from "./ViewBooks";
import ReviewTabs from "./ReviewTabs";

const ReviewContainer = ({ selectedBook }) => {
    const [isVisited, setIsVisited] = useState(false);

    const handleVisit = () => setIsVisited((isVisted) => !isVisted);

    return (
        <div className="review-container">
            <ReviewTabs onVisit={handleVisit} isVisited={isVisited} />
            {!isVisited && Object.keys(selectedBook).length > 0 && (
                <ViewBooks selectedBook={selectedBook} />
            )}
        </div>
    );
};

export default ReviewContainer;
