import ViewBookDetails from "./ViewBookDetails";
import ViewBookFooter from "./ViewBookFooter";

const ViewBook = ({ selectedBook }) => {
    return (
        <>
            <div className="view-head">
                <div className="view-img">
                    <img
                        src={`https://covers.openlibrary.org/b/id/${selectedBook?.cover_i}-M.jpg`}
                        alt={selectedBook?.title}
                    />
                </div>
                <ViewBookDetails
                    author={selectedBook?.author_name}
                    publishDate={selectedBook?.publish_date}
                    language={selectedBook?.language}
                    title={selectedBook?.title}
                    ratings={selectedBook?.ratings_average}
                />
            </div>
            <div className="view-body">
                {selectedBook.first_sentence ? (
                    <>
                        <h4>Opening line:</h4>
                        <p>{selectedBook?.first_sentence.at(0)}</p>
                    </>
                ) : null}
            </div>
            <ViewBookFooter />
        </>
    );
};

export default ViewBook;
