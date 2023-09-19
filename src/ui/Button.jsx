const Button = ({ children, nameClass, handleClick }) => {
    return (
        <button
            className={nameClass ? "btn btn-primary active" : "btn btn-primary"}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;
