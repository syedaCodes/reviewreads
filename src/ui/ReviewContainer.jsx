import { useState } from "react";
import ViewBooks from "./BookView/ViewBook";
import ReviewTabs from "./ReviewTabs";

const ReviewContainer = ({ selectedBook }) => {
    const [isVisited, setIsVisited] = useState(false);

    const handleVisit = () => setIsVisited((isVisted) => !isVisted);

    return (
        <div className="review-container">
            <ReviewTabs onVisit={handleVisit} isVisited={isVisited} />

            <div className="view">
                {!isVisited && Object.keys(selectedBook).length > 0 && (
                    <ViewBooks selectedBook={selectedBook} />
                )}
            </div>
        </div>
    );
};

export default ReviewContainer;
