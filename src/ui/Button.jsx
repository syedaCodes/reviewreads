const Button = ({ children, nameClass, handleClick }) => {
    return (
        <button
            className={nameClass ? `btn ${nameClass}` : "btn"}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;
