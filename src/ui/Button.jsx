const Button = ({ children, nameClass, num, handleClick }) => {
    return (
        <button
            className={
                nameClass === num ? `btn btn-primary active` : "btn btn-primary"
            }
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;
