import ViewBookDetails from "./ViewBookDetails";

const ViewBooks = ({ selectedBook }) => {
    return (
        <div className="view">
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
                />
            </div>
            <div className="view-body">
                <div className="">
                    {selectedBook.first_sentence ? (
                        <>
                            <h4>Opening line:</h4>
                            <p>{selectedBook?.first_sentence[0]}</p>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default ViewBooks;
