import ViewBooks from "./ViewBooks";

const ReviewContainer = ({ selectedBook }) => {
    return (
        <div>
            <div>
                <h4>Books You`ve Read</h4>
            </div>
            {Object.keys(selectedBook).length > 0 && (
                <ViewBooks selectedBook={selectedBook} />
            )}
        </div>
    );
};

export default ReviewContainer;
