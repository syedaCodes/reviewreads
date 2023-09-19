const ErrorMessage = ({ message }) => {
    return (
        <div className="errorContainer">
            <p>⛔ {message}</p>
        </div>
    );
};

export default ErrorMessage;
