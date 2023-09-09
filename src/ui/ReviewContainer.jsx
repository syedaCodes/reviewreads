import { useState } from "react";
import ViewBooks from "./BookView/ViewBook";
import ReviewTabs from "./ReviewTabs";
import Button from "./Button";

const ReviewContainer = ({ selectedBook }) => {
    const [isActive, setIsActive] = useState(0);

    return (
        <div className="review-container">
            <ReviewTabs>
                <Button
                    num={0}
                    nameClass={isActive}
                    handleClick={() => setIsActive(0)}
                >
                    Book view
                </Button>
                <Button
                    num={1}
                    nameClass={isActive}
                    handleClick={() => setIsActive(1)}
                >
                    Books Reviewed
                </Button>
            </ReviewTabs>

            <div className="view">
                {!isActive && Object.keys(selectedBook).length > 0 && (
                    <ViewBooks selectedBook={selectedBook} />
                )}
            </div>
        </div>
    );
};

export default ReviewContainer;
