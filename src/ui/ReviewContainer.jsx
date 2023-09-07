import { useState } from "react";
import Button from "./Button";
import ViewBooks from "./ViewBooks";

const ReviewContainer = ({ selectedBook }) => {
    const [isVisited, setIsVisited] = useState(false);

    const handleVisit = () => setIsVisited((isVisted) => !isVisted);

    return (
        <div className="review-container">
            <div className="review-tabs">
                <Button
                    nameClass={isVisited ? "btn-primary" : "active btn-primary"}
                    handleClick={handleVisit}
                >
                    Book view
                </Button>
                <Button
                    nameClass={
                        !isVisited ? "btn-primary" : "active btn-primary"
                    }
                    handleClick={handleVisit}
                >
                    Books you`ve reviewed
                </Button>
            </div>
            {!isVisited && Object.keys(selectedBook).length > 0 && (
                <ViewBooks selectedBook={selectedBook} />
            )}
        </div>
    );
};

export default ReviewContainer;
